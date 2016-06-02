import $ from 'jquery';
import 'styles/main.scss';
import todos from 'pages/todo';
import project from 'pages/project';
import funnySquares from 'pages/funnySquares';
import goL from 'pages/goL';
import threeJSExample from 'pages/threeJSExample';

$(function(){
  var url = window.location.pathname;

  switch (url) {
    case '/pages/todo.html': 
      todos.init();
    break;
    case '/pages/project.html':
      project.init();
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
    case '/pages/goL.html':
      goL.init();
    break;
    case '/pages/threeJSExample.html':
      threeJSExample.init();
    break;
    default: 
      // Default case here, 
  }

});
