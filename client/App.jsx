import $ from 'jquery';
import 'styles/main.scss';
import todos from 'pages/todo';
import project from 'pages/project';
import funnySquares from 'pages/funnySquares';
import goL from 'page/goL';

$(function(){
  var url = window.location.pathname;
  switch (url) {
    case '/pages/todo.html': 
      todos.init();
		break;
    case '/pages/project.html':
				// init the project javascript
    break;
    case '/pages/funnySquares.html':
				funnySquares.init();
    break;
    case '/pages/goL.html'
    break;
    default: 
			// Default case here, 
  }
});
