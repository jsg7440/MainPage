var fs = require('fs');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var multiparty = require('multiparty');

var fineUpload = {
  onUpload: function(req, res) {
    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {
      var partIndex = fields.qqpartindex;
      // text/plain is required to ensure support for IE9 and older
      res.set("Content-Type", "text/plain");
      onSimpleUpload(fields, files[fileInputName][0], res);
    });
  },
  onSimpleUpload: function(fields, file, res) {
    var uuid = fields.qquuid,
      responseData = {
        success: false
      };
    file.name = fields.qqfilename;
    if (isValid(file.size)) {
      moveUploadedFile(file, uuid, function() {
          responseData.success = true;
          res.send(responseData);
        },
        function() {
          responseData.error = "Problem copying the file!";
          res.send(responseData);
        });
    }
    else {
        failWithTooBigFile(responseData, res);
    }
  },
  onDeleteFile: function(req, res) {
    var uuid = req.params.uuid,
      dirToDelete = uploadedFilesPath + uuid;

    rimraf(dirToDelete, function(error) {
      if (error) {
        console.error("Problem deleting file! " + error);
        res.status(500);
      }
      res.send();
    });
  },
  moveUploadedFile: function (file, uuid, success, failure) {
    var destinationDir = uploadedFilesPath + uuid + "/",
      fileDestination = destinationDir + file.name;
    moveFile(destinationDir, file.path, fileDestination, success, failure);
  },
  moveFile: function (destinationDir, sourceFile, destinationFile, success, failure) {
    mkdirp(destinationDir, function(error) {
      var sourceStream, destStream;
      if (error) {
        console.error("Problem creating directory " + destinationDir + ": " + error);
        failure();
      }
      else {
        sourceStream = fs.createReadStream(sourceFile);
        destStream = fs.createWriteStream(destinationFile);
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

module.exports = fineUpload;
