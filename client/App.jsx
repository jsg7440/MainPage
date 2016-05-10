import $ from 'jquery';
import 'styles/main.scss';
import todos from 'pages/todo';
import project from 'pages/project';

todos.init();

$(function(){
	var url = window.location.pathname;

	// First javascript router
	switch(url){
		case 'pages/todo.html': 
			todos.init();
		break;
		case 'pages/project.html':
			//init the project javascript
		break;
	}
});
