
import $ from 'jquery';
import 'styles/main.scss';
import TodoControllerView from 'pages/todo/todoController';
// import project from 'pages/project';
import funnySquares from 'pages/funnySquares';
import header from 'components/header';
import photoSearch from 'pages/photoSearch';

$(function(){

  header.init();

  var url = window.location.pathname;

  // Javascript Router
  switch (url) {
    case '/pages/todo.html':
      var todoControllerView = new TodoControllerView();
    break;
    // case '/':
    //   // init the project javascript
    //   home.init();
    // break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
    case '/pages/photoSearch.html':
      photoSearch.init();
    break;
    default:
      // Nothing here
  }

});
