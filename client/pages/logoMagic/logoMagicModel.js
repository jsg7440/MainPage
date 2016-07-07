var $ = require('jquery');
import React from 'react';
// import ReactDOM from 'react-dom';
// import Backbone from 'backbone';
// import _ from 'underscore';
// import dispatcher from 'pages/logoMagic/logoMagicDispatcher';
// import fineupload from 'fine-uploader';

var LogoMagicModel = {
  load: function(){
    $.ajax({
      url: '/logoMagicAPI',
      method: 'GET',
      complete: function(response){
      }
    });
  }
};

module.exports = LogoMagicModel;
