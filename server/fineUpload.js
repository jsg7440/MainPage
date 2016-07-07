var fs = require('fs');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var multiparty = require('multiparty');
var images = require('images');
var _ = require('underscore');
// var $ = require('jquery');

var config = {
  // paths/constants
  fileInputName: process.env.FILE_INPUT_NAME || "qqfile",
  uploadedFilesPath: process.env.UPLOADED_FILES_DIR,
  maxFileSize: process.env.MAX_FILE_SIZE || 0 // in bytes, 0 for unlimited
};
 
var FineUpload = {

  onUpload: function(req, res) {
    var form = new multiparty.Form();
    var that = this;
    form.parse(req, function(err, fields, files) {
      var partIndex = fields.qqpartindex;
      // text/plain is required to ensure support for IE9 and older
      res.set("Content-Type", "text/plain");
      that.onSimpleUpload(fields, files[config.fileInputName][0], res);
    });
  },
  onSimpleUpload: function(fields, file, res) {
    var uuid = fields.masterId,
      responseData = {
        success: false
      };
    file.name = fields.qqfilename;
    if (this.isValid(file.size)) {
      var fileDestination = {};
      var that = this;
      this.moveUploadedFile(file, uuid, _.partial(function(uuid) {
          that.combineImages(uuid);
          responseData.success = true;
          responseData.file = {
            location: fileDestination
          }
          res.send(responseData);
        }, uuid),
        function() {
          responseData.error = "Problem copying the file!";
          res.send(responseData);
        });
    }
    else {
        this.failWithTooBigFile(responseData, res);
    }
  },
  onDeleteFile: function(req, res) {
    var uuid = req.params.uuid,
      dirToDelete = config.uploadedFilesPath + uuid;

    rimraf(dirToDelete, function(error) {
      if (error) {
        console.error("Problem deleting file! " + error);
        res.status(500);
      }
      res.send();
    });
  },
  combineImages: function(uuid) {
    
    fs.readdir(('/server/imageDatabase/' + uuid + "/"), function(err, images){
      console.log(err, images);
      // console.log(images.length);
      // console.log(imageCount);
    });
    //Read in the file names in directory
    // if ( === 2) {
    //   images.size(300);
    // }
    // if(filesCount != 2) {
    //   if ()
    // }
    // images(uuid)
    // .size(400)
    // .draw(images("logo.png"), 10, 10)
    // .save( (__dirname + "/imageDatabase/" + uuid + "/output.jpg"), {
    //     quality : 5
    // });
  },
  isValid: function(size) {
    return config.maxFileSize === 0 || size < config.maxFileSize;
  },
  moveUploadedFile: function (file, uuid, success, failure) {
    var fileDestination;
    var destinationDir = __dirname + "/imageDatabase/" + uuid + "/",
      fileDestination = destinationDir + file.name;
    this.moveFile(destinationDir, file.path, fileDestination, success, failure, uuid);
  },
  moveFile: function (destinationDir, sourceFile, fileDestination, success, failure, uuid) {
    mkdirp(destinationDir, function(error) {
      var sourceStream, destStream;
      if (error) {
        console.error("Problem creating directory " + destinationDir + ": " + error);
        failure();
      }
      else {
        sourceStream = fs.createReadStream(sourceFile);
        destStream = fs.createWriteStream(fileDestination);
        sourceStream
          .on("error", function(error) {
            console.error("Problem copying file: " + error.stack);
            destStream.end();
            failure();
          })
          .on("end", function(){
            destStream.end();
            success();
          })
          .pipe(destStream);
        }
    });
  },
  failWithTooBigFile: function (responseData, res) {
    responseData.error = "Too big!";
    responseData.preventRetry = true;
    res.send(responseData);
  }
};

module.exports = FineUpload;
