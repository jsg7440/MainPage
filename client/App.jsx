
import $ from 'jquery';
import 'styles/main.scss';
import todos from 'pages/todo-backbone';
import project from 'pages/project';
import funnySquares from 'pages/funnySquares';
import header from 'components/header';

$(function(){

  header.init();

  var url = window.location.pathname;

  // Javascript Router
  switch (url) {
    case '/pages/todo.html':
      todos.render();
    break;
    case '/':
      // init the project javascript
      // home.init();
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
  }

  // Fancy Console Message for Developers
  // console.log("================================");
  // console.log("================================");
  // console.log("=====I am looking for a job=====");
  // console.log("================================");
  // console.log("============call me=============");
  // console.log("================================");
  // console.log("================================");

});

