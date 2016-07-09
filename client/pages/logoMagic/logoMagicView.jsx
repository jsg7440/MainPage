var $ = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import FineUploaderHelper from 'pages/logoMagic/fineUploaderHelper';

// var LogoMagicView = {
//   init: function() {
//     var $this = $(ReactDOM.findDOMNode(this));
//     LogoMagicView.render($this);
//     FineUploaderHelper.initialize($this);
//   },
//   render: function($this){
//     $this.html(<div id="fine-uploader-gallery"></div>);
//   }
// };

var LogoMagicView = React.createClass({
  componentDidMount: function() {
    var $this = $(ReactDOM.findDOMNode(this));
    FineUploaderHelper.initialize($this);
  },
  render: function(){
    return (
      <div id="fine-uploader-gallery"></div> 
      );
  }
  // TODO: implement the model
  // initialize: function(){
    // this.LogoMagicModel.fetch();
    // this.LogoMagicModel.on('change', this.render, this); 
  // },
  // drawNewImage: function(image){
  //   var src = document.createElement('img');
  //   document.getElementById('server-images-list').appendChild(image);
  // }
});

module.exports = LogoMagicView;
