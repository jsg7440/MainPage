var fs = require('fs');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var multiparty = require('multiparty');
var images = require('images');
var _ = require('underscore');
var sizeOf = require('image-size');

var config = {
  fileInputName: "qqfile",
  maxFileSize: 0 // in bytes, 0 for unlimited
};

var FineUpload = {
  onUpload: function(req, res) {
    var form = new multiparty.Form();
    var that = this;
    form.parse(req, function(err, fields, files) {
      var partIndex = fields.qqpartindex;
      res.set("Content-Type", "text/plain");
      that.onSimpleUpload(fields, files[config.fileInputName][0], req, res);
    });
  },
  onSimpleUpload: function(fields, file, req, res) {
    var uuid = fields.masterId;
    var responseData = {
      success: false
    };
    file.name = fields.qqfilename;
    if (this.isValid(file.size)) {
      this.moveUploadedFile(file, uuid, _.bind(function() {
        var fileDestination = req.protocol + '://' + req.get('host') + "/media/images/output/" + uuid + ".jpg"
        this.combineImages(uuid);
        responseData.success = true;
        responseData.file = {
          location: fileDestination
        }
        res.send(responseData);
      }, this),
      function() {
        responseData.error = "Problem copying the file!";
        res.send(responseData);
      });
    }
    else {
      this.failWithTooBigFile(responseData, res);
    }
  },
  combineImages: function(uuid) {
    var filePath = 'server/imageDatabase/' + uuid;
    var files = fs.readdirSync(filePath);
    if (files.length >= 2) {
      this.processImages(files, uuid);
    }
  },
  processImages: function(files, uuid){ 
    var filePath = 'server/imageDatabase/' + uuid + "/";
    var file_path1 = filePath + files[0];
    var file_path2 = filePath + files[1];
    var dimA = sizeOf(file_path1);
    var dimB = sizeOf(file_path2);
    var permanent_dir = __dirname + "/../public/media/images/";
    var file_name = permanent_dir + uuid + "_"
    var permanent_file_path = permanent_dir + "output/" + uuid + ".jpg";

    mkdirp(permanent_dir + "output");

    image_1 = images(file_path1).size(300).save((file_name + "_" + files[0]));
    image_2 = images(file_path2).size(300).save((file_name + "_" + files[1]));
    var dimAPost = sizeOf((file_name + "_" + files[0]));
    var dimBPost = sizeOf((file_name + "_" + files[1]));
    var imageSize = 300;

    if (dimAPost.width === imageSize) {
      console.log('drawing vertically');
      images(imageSize + 1, (dimAPost.height + dimBPost.height + 1))
        .fill(0xff, 0xff, 0xff, 1)
        .draw(image_1, 0, 0)
        .draw(image_2, 0, dimAPost.height)
        .save(permanent_file_path);
    } else {
      console.log('drawing horizontally');
      images(dimAPost.width + dimBPost.width + 1, imageSize + 1)
        .fill(0xff, 0xff, 0xff, 1)
        .draw(image_1, 0, 0)
        .draw(image_2, dimAPost.width, 0)
        .save(permanent_file_path);
    }
    rimraf(filePath, function(error) {
      if (error) {
        console.error("Problem deleting file! " + error);
      }
    });
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
