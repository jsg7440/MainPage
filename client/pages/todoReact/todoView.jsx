import React, { PropTypes } from 'react';
import $ from 'jquery';

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
    var title = <div className="col-sm-10" onClick={this.titleClick}>{todo.title}</div>;
    if (todo.isEditing) {
      title = (
        <div className="col-sm-10">
          <input type="text" className="form-control" defaultValue={todo.title} onKeyPress={this.editKeypress} onChange={function(){}}></input>
        </div>
      );
    }

    return (
      <div>
        <div className="col-sm-1">
            <input type="checkbox" checked={todo.completed} onChange={this.handleComplete}></input>
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
    if (event.which === 13) {
      var id = this.props.data.id;
      var newTitle = $('li').eq(id).find('input[type="text"]').val();
      this.props.controller.model.editTitle(newTitle, id)
    }
  },
  handleClose: function(){
    var id = this.props.data.id;
    this.props.controller.model.removeItem(id);
  },
  handleComplete: function(){
    var id = this.props.data.id;
    var newValue = !this.props.data.completed;
    this.props.controller.model.itemCompleted(id, newValue);
  },
  titleClick: function(){
    var id = this.props.data.id;
    this.props.controller.model.startEditing(id);
  }
});

module.exports = TodoItem;
