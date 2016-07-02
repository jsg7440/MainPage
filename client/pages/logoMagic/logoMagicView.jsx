var $ = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import Dropzone from 'dropzone';
import DropzoneComponent from 'react-dropzone-component';
import LMModel from 'pages/logoMagic/logoMagicModel'
import dispatcher from 'pages/logoMagic/logoMagicDispatcher';


var LogoMagicController = React.createClass({
  propTypes: {
    data: {
      title: PropTypes.string,
      filename: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      url: PropTypes.string
    }
    // controller: ???
  },
  render: function(){
    var images = this.model.get('images');
    var image = this.props.data;
    var $ul = this.$el.find('.server-images-list');
    $ul.html('');
    images.forEach(function(){
      var $li = $('                                                                                           \
        <figure>                                                                                              \
          <img src="{image.url}" alt="{image.filename}" width="{image.width}" height="image.height">          \
          <figcaption>{image.title}</figcaption>                                                              \
        </figure>                                                                                             \
        .');
      $ul.append($li);
      ReactDOM.render(
        // <NOCLUE NEED HELP HERE>
      );
    });  
  },
  initialize: function(){
    this.model.fetch();
    this.model.on('change', this.render, this);
  },s
  editName: function(){
    // Opens a form field to change and save name of image
  },
  saveLocal: function(){
    // Save to host on click
  }
})



module.exports = logoMagicView;


