var $ = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
// import Backbone from 'backbone';
// import _ from 'underscore';
import dispatcher from 'pages/logoMagic/logoMagicDispatcher';
import fineupload from 'fine-uploader';

// var LogoMagicModel = React.createClass({
//   load: function(){
//     // Loads images from server

//     // var that = this;
//     // $.ajax({
//     //   url: '/logoMagicAPI',
//     //   method: 'GET',
//     //   complete: function(response){
//     //     var dataString = response.responseText;
//     //     var data = JSON.parse(dataString);
//         // data = that.applySchema(data);
//         // that.set('todos', data);
//       // }
//     // });
//   },  
//   save: function(){
//     // var that = this;
    
//     // var that = this;
//     // var todos = this.get('todos');
//     // $.ajax({
//     //   url: '/api',
//     //   method: 'POST',
//     //   data: {todos: JSON.stringify(todos)},
//     //   complete: function(response){
//     //     var dataString = response.responseText;
//     //     var data = JSON.parse(dataString);
//     //     data = that.applySchema(data);
//     //     that.set('todos', data);
//     //     that.trigger('change');
//     //   }
//     // });
//   },
//   resize: function(){
//     // Scales combined image to 300 x 300
//   },
//   combineVertical: function(){
//     // Combines images vertically
//     // Passes image to save function
//   },
//   combineHorizontal: function(){
//     // Combines images horizontally
//     // Passes image to save function
//   },
//   displayNewImage: function(){
//     // Renders the combined image
//   },
//   editTitle: function(id){
//     // Changes the title of image
//     var image = this.get('images');
//     // Saves image to database
//   },
//   ignoreEdit: function(){
//     // Ignores edits and closes name edit field
//     // Sends to render with a change event
//   }
// });

// module.exports = logoMagicModel;