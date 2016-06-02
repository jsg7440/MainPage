
var $ = require('jquery');

// Legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

// Import handlers
import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import rawTemplate from 'templates/todoItem.html';

// Backbone Todo App
// Model
var TodoModel;
var TodoControllerView;
var TodoView;

var todoModel;
var todoControllerView;

TodoModel = Backbone.Model.extend({                    
  defaults: {
    // No defaults yet
  },
  fetch: function(){},
  save: function(){}
});                         

var todoModel = new TodoModel();                               

// View

TodoControllerView = Backbone.View.extend({                      
  el: 'body',                                         
  model: todoModel,
  events: {
    // No Events yet
    },
    initialize: function(){},
    render: function(){
      alert('Backbone!');
    },
    someFunction: function(){},
    closeView: function(){}            
});

var todoControllerView = new TodoControllerView();

// TodoView = Backbone.View.extend({                      
//   el: 'body',                                         
//   model: model,
//   events: {
//     // No Events yet
//     },
//     initialize: function(){},
//     render: function(){},
//     someFunction: function(){},
//     closeView: function(){}            
//   }
// });

// var todoView = new TodoView();     

module.exports = todoControllerView;                            






