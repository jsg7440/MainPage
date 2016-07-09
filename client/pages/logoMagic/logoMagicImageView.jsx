var $ = require('jquery');
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FineUploaderHelper from 'pages/logoMagic/fineUploaderHelper';

var LogoMagicImageView = React.createClass({
  render: function(image){
    return (
      <figure><img src="{image}"></img></figure> 
      );
  }
});

module.exports = LogoMagicImageView;
