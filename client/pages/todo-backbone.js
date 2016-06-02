
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
    todos: []
  },
  todoSchema: {
    id: 0,
    title: '',
    completed: false
  },
  fetch: function(){
    var data = lscache.get('todos');
    data = this.applySchema(data);
    this.set('todos', data);
  },
  save: function(){
    var data = this.get('todos');
    data = this.applySchema(data);
    lscache.set('todos', data);
  },
  applySchema: function(){
    var data = todos;
    var schema = this.todoSchema;
    data = (_.isArray(todos))? data : [];
    data = data.map(function(todo, index){
      todo.id = index;
      return _.defaults(todo, schema);
    });
    // LEFT OFF POINT *************************
    return data;
  }
});

todoModel = new TodoModel();

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

todoControllerView = new TodoControllerView();

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
