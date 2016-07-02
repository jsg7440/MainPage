var $ = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import _ from 'underscore';
import Backbone from 'backbone';
import ImgMagick from 'imagemagick';
import dispatcher from 'pages/logoMagic/logoMagicDispatcher';

var LogoMagicModel = React.createClass({
  load: function(){
    // Loads images from server

    // var that = this;
    // $.ajax({
    //   url: '/logoMagicAPI',
    //   method: 'GET',
    //   complete: function(response){
    //     var dataString = response.responseText;
    //     var data = JSON.parse(dataString);
        // data = that.applySchema(data);
        // that.set('todos', data);
      // }
    // });
  },  
  save: function(){
    // Saves images to server
  },
  resize: function(){
    // Scales combined image to 300 x 300
  }
  combineVertical: function(){
    // Combines images vertically
    // Passes image to save function
  },
  combineHorizontal: function(){
    // Combines images horizontally
    // Passes image to save function
  },
  displayNewImage: function(){
    // Renders the combined image
  },
  ignoreEdit: function(){
    // Ignores edits and closes name edit field
  }
})

module.exports = logoMagicModel;