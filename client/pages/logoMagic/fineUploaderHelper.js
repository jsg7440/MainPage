var $ = require('jquery');
import fineUploader from '../../../node_modules/fine-uploader/jquery.fine-uploader/jquery.fine-uploader.js';
import _ from 'underscore';

var FineUploaderHelper = {
  initialize: function(element){
    var generate_uuid;
    element.fineUploader({
      template: 'qq-template-gallery',
      autoUpload: false,
      request: {
        endpoint: '/logoMagicAPI',
        params: {
          masterId: generate_uuid
        }
      },
      thumbnails: {
        placeholders: {
          waitingPath: '/images/placeholders/waiting-generic.png',
          notAvailablePath: '/images/placeholders/not_available-generic.png'
        }
      },
      validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
      },
      callbacks: {
        onSubmit: function(id, name) {
          var newParams = {
            newPar: 321
          },
          finalParams = {};
          _.extend(finalParams, newParams);
          this.setParams(finalParams);
        }
      }
    });
    $('#trigger-upload').click(function() {
      element.fineUploader('uploadStoredFiles');
    });
  },
  generate_uuid: function() {
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0; 
      var v = c === 'x' ? r : ( r & 0x3 | 0x8 );
      return v.toString(16);
    });
  }
};

module.exports = FineUploaderHelper;
