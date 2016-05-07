/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// on document load
	'use strict';
	
	$(function () {
	
	  // Data Model
	  var todos = [];
	
	  // Application
	  var template;
	  var app = {
	    init: function init() {
	      app.compileTemplates();
	      app.render();
	    },
	    render: function render() {
	      // render the todos
	      var todoHtml = _.map(todos, function (todo) {
	        return template(todo);
	      });
	      app.unbindEvents();
	      $('ul.list-group').html(todoHtml.join(""));
	      app.bindEvents();
	    },
	    compileTemplates: function compileTemplates() {
	      template = $('[type="text/x-template"]');
	      template = Handlebars.compile(template.first().html());
	    },
	    unbindEvents: function unbindEvents() {
	      $('.list-group-item').off();
	      $('.add-todo-container button').off();
	      $('input[type="checkbox"]').off();
	      $('list-group-item button').off();
	    },
	    bindEvents: function bindEvents() {
	      app.bindHoverEvents();
	      app.bindCheckboxEvents();
	      app.bindAddTodoEvents();
	      app.bindAddTodoEventsOnEnter();
	      app.bindRemoveTodoEvents();
	      app.bindTodoItemFinished();
	    },
	    bindHoverEvents: function bindHoverEvents() {
	      var $items = $('.list-group-item');
	      $items.on('mouseover', function (event) {
	        $(this).addClass('list-group-item-success');
	      });
	      $items.on('mouseout', function () {
	        $(this).removeClass('list-group-item-success');
	      });
	    },
	    bindCheckboxEvents: function bindCheckboxEvents() {
	      var $checkboxes = $('input[type="checkbox"]');
	      $checkboxes.on('change', function () {
	        var wasChecked = $(this).is(':checked');
	        if (!wasChecked) {
	          $(this).parent().parent().removeClass("disabled");
	        } else {
	          $(this).parent().parent().addClass("disabled");
	        }
	      });
	    },
	    bindAddTodoEvents: function bindAddTodoEvents() {
	      $('.add-todo-container button').on('click', function () {
	        var newTodoTitle = $('.add-todo-container input').val();
	        if (_.isString(newTodoTitle) && newTodoTitle.length > 2) {
	          var newTodoObject = { title: newTodoTitle, completed: false };
	          todos.push(newTodoObject);
	          $('.add-todo-container input').val("");
	          app.render();
	        }
	      });
	    },
	    bindAddTodoEventsOnEnter: function bindAddTodoEventsOnEnter() {
	      $(document).keypress(function (event) {
	        var kcode = event.keyCode;
	        if (kcode === 13) {
	          var newTodoTitle = $('.add-todo-container input').val();
	          if ($.type(newTodoTitle) === 'string' && newTodoTitle.length > 2) {
	            var newTodoObject = { title: newTodoTitle, completed: false };
	            todos.push(newTodoObject);
	            $('.add-todo-container input').val("");
	            app.render();
	          }
	        }
	      });
	    },
	    bindRemoveTodoEvents: function bindRemoveTodoEvents() {
	      $('.list-group-item button').on('click', function () {
	        var index = $(this).parent().parent().index();
	        todos.splice(index, 1);
	        $();
	        app.render();
	      });
	    },
	    bindTodoItemFinished: function bindTodoItemFinished() {}
	
	  };
	
	  app.init();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=application.js.map