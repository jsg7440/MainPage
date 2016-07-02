// import $ from 'jquery';
import 'styles/main.scss';
import TodoControllerView from 'pages/todo/todoController';
import LogoMagicView from 'pages/logoMagic/logoMagicView';
import funnySquares from 'pages/funnySquares';
import header from 'components/header';
import photoSearch from 'pages/photoSearch';
import TodoReactControllerView from 'pages/todoReact/todoListView';

$(function(){

  header.init();

  var url = window.location.pathname;

  // Javascript Router
  switch (url) {
    case '/pages/todo.html':
      var todoControllerView = new TodoControllerView();
    break;
    case '/pages/todoReact.html':
      var todoReactControllerView = new TodoReactControllerView();
    break;
    case '/pages/logoMagic.html':
      var logoMagicView = new LogoMagicView();
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
    case '/pages/photoSearch.html':
      photoSearch.init();
    break;
    default:
  }

});
