var $ = require('jquery');
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import LogoMagicModel from 'pages/logoMagic/logoMagicModel';
import FineUploaderHelper from 'pages/logoMagic/fineUploaderHelper';

var LogoMagicView = React.createClass({
  componentDidMount: function() {
    var $this = $(ReactDOM.findDOMNode(this));
    FineUploaderHelper.initialize($this);
  },
  render: function(){
    return (
      <div id="fine-uploader-gallery"></div> 
      );
  },
  initialize: function(){
    this.LogoMagicModel.fetch();
    this.LogoMagicModel.on('change', this.render, this); 
  }
});

module.exports = LogoMagicView;

    //   images.forEach(function(){
    //     var $li = $('                                                                                           \
    //       <figure>                                                                                              \
    //         <img src="{image.url}" alt="{image.filename}" width="{image.width}" height="image.height">          \
    //         <figcaption>{image.title}</figcaption>                                                              \
    //       </figure>                                                                                             \
    //       .');

    // var $ul = window.find('.server-images-list');
    //       // $ul.html('');
    //       var $li = $('                                \
    //         <figure>                                   \
    //         <img src="{image}">                        \
    //         </figure>                                  \
    //         .');                                       
    //       $ul.append($li);