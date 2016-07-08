var $ = require('jquery');
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import LMModel from 'pages/logoMagic/logoMagicModel';
import dispatcher from 'pages/logoMagic/logoMagicDispatcher';
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
    this.LMModel.fetch();
    this.LMModel.on('change', this.render, this); 
  }
});

module.exports = LogoMagicView;

// var images = this.model.get('images');
    //   var image = this.props.data;
    //   var $ul = this.$el.find('.server-images-list');
    //   $ul.html('');
    //   images.forEach(function(){
    //     var $li = $('                                                                                           \
    //       <figure>                                                                                              \
    //         <img src="{image.url}" alt="{image.filename}" width="{image.width}" height="image.height">          \
    //         <figcaption>{image.title}</figcaption>                                                              \
    //       </figure>                                                                                             \
    //       .');
    //     $ul.append($li);