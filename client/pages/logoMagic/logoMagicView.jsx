var $ = require('jquery');
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import Dropzone from 'dropzone';
import DropzoneComponent from 'react-dropzone-component';
import LMModel from 'pages/logoMagic/logoMagicModel'
import dispatcher from 'pages/logoMagic/logoMagicDispatcher';
import fineUploader from '../../../node_modules/fine-uploader/jquery.fine-uploader/jquery.fine-uploader.js';

var LogoMagicController = React.createClass({
  propTypes: {
    data: {
      id: PropTypes.number,
      title: PropTypes.string,
      filename: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      url: PropTypes.string
    }
    // controller: ???
  },

 render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  },
  // render: function(){
  //   if (image.isEditing = true) {
  //     return;
  //   } else {
  //     var images = this.model.get('images');
  //     var image = this.props.data;
  //     var $ul = this.$el.find('.server-images-list');
  //     $ul.html('');
  //     images.forEach(function(){
  //       var $li = $('                                                                                           \
  //         <figure>                                                                                              \
  //           <img src="{image.url}" alt="{image.filename}" width="{image.width}" height="image.height">          \
  //           <figcaption>{image.title}</figcaption>                                                              \
  //         </figure>                                                                                             \
  //         .');
  //       $ul.append($li);
  //       ReactDOM.render(
  //         <div>Hi</div>
  //       );
  //     });  
  //   }
  // },
  initialize: function(){
    // this.model.fetch();
    // this.model.on('change', this.render, this);
    debugger;
    $('#fine-uploader-gallery').fineUploader({
        template: 'qq-template-gallery',
        request: {
          endpoint: '/server/uploads'
        },
        thumbnails: {
          placeholders: {
            waitingPath: '/source/placeholders/waiting-generic.png',
            notAvailablePath: '/source/placeholders/not_available-generic.png'
          }
        },
        validation: {
          allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
        }
      });
  },
  editName: function(event){
    var id = this.props.data.id;
    var title = this.props.data.title;
    var newTitle = $('li').eq(id).find('input[type="text"]').val();
    dispatcher.editImageName(id, title, newTitle, event);
  },
  saveLocal: function(event){
    // Save to host on click
  }
})

module.exports = LogoMagicView;


