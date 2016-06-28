import React, { PropTypes } from 'react';
import $ from 'jquery';
import dispatcher from 'pages/todoReact/todoDispatcher';

var TodoItem = React.createClass({
  propTypes: {
    data: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool
    }),
    controller: PropTypes.object
  },
  render: function(){
    var todo = this.props.data;
    var title = <div className="col-sm-10" onKeyPress={this.addItemOnEnter} onClick={this.titleClick}>{todo.title}</div>;
    if (todo.isEditing) {
      title = (
        <div className="col-sm-10">
          <input type="text" className="form-control" defaultValue={todo.title} onKeyUp={this.editKeypress} onChange={function(){}}></input>
        </div>
      );
    }

    return (
      <div>
        <div className="col-sm-1">
            <input type="checkbox" checked={todo.completed} onChange={this.handleComplete} ></input>
        </div>
        {title}
        <div className="col-sm-1">
          <button type="button" aria-label="Close" onClick={this.handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  },
  editKeypress: function(event){
    var id = this.props.data.id;
    var newTitle = $('li').eq(id).find('input[type="text"]').val();
    dispatcher.editTodoTitle(id, newTitle, event);
  },
  handleClose: function(){
    var id = this.props.data.id;
    dispatcher.removeTodo(id);
  },
  handleComplete: function(){
    var id = this.props.data.id;
    dispatcher.clickComplete(id);
  },
  titleClick: function(){
    var id = this.props.data.id;
    dispatcher.startEditMode(id);
  },
  addItemOnEnter: function(event){
    console.log('alert');
    dispatcher.addTodoEnter(event);
  }
});

module.exports = TodoItem;
