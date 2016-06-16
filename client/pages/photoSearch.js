import $ from 'jquery';
import flickrImage from 'templates/flickrImage.html';
import Handlebars from 'handlebars';

var compiledTemplate = Handlebars.compile(flickrImage);

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    app.$input = $('.search-container input');
    app.bindEvents();
  },
  bindEvents: function(){
    app.$input.on('keypress', app.searchKeypress);
  },
  searchKeypress: function(event){
    if (event.which === 13) {
      app.doSearch();
    }
  },
  doSearch: function(){
    var phrase = app.$input.val();
    $.ajax({
      url: 'https://api.flickr.com/services/rest',
      method: 'GET',
      data: {
        text: phrase,
        method: 'flickr.photos.search',
        api_key: 'f09dfbf333809d88f4fe897c321de56b',
        format: 'json',
        per_page: 50
      },
      complete: function(response){
        var text = response.responseText;
        text = text.slice(14, text.length - 1);
        var data = JSON.parse(text);
        app.renderResults(data);
      }
    });
  },
  renderResults: function(data){
    var html = '';
    var myPhotos = data.photos.photo;
    myPhotos.forEach(function(item){
      html += compiledTemplate(item);
    });
    $('.search-results').html(html);
  }
};

module.exports = app;
