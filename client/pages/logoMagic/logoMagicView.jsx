var $ = require('jquery');
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import LMModel from 'pages/logoMagic/logoMagicModel';
import dispatcher from 'pages/logoMagic/logoMagicDispatcher';
import FineUploaderHelper from 'pages/logoMagic/fineUploaderHelper';

var LogoMagicView = React.createClass({
  propTypes: {
    // data: {
    //   id: PropTypes.number,
    //   title: PropTypes.string,
    //   filename: PropTypes.string,
    //   width: PropTypes.number,
    //   height: PropTypes.number,
    //   url: PropTypes.string
    // }
    // controller: ???
  },
  componentDidMount: function() {
    var $this = $(ReactDOM.findDOMNode(this));
    FineUploaderHelper.initialize($this);
  },
  render: function(){
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
    return (
      <div id="fine-uploader-gallery"></div> 
    );
  },
  initialize: function(){
    this.LMModel.fetch();
    this.LMModel.on('change', this.render, this);
    
  },
  editName: function(event){
    var id = this.props.data.id;
    var title = this.props.data.title;
    var newTitle = $('li').eq(id).find('input[type="text"]').val();
    dispatcher.editImageName(id, title, newTitle, event);
  },
  saveLocal: function(){
    // Save to host on click
  }
});

module.exports = LogoMagicView;
