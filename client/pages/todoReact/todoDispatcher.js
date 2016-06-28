import todoModel from 'pages/todoReact/todoModel';

var dispatcher = {
  clickComplete: function(id){
    todoModel.itemCompleted(id);
  },
  addTodo: function(title){
    if (title !== '' 
      && typeof title === 'string' 
    ) {
      todoModel.addItem(title);
    }
  },
  addTodoEnter: function(event){
    if (event.which === 13
      && title !== ''
      && typeof title === 'string'
    ) {
      todoModel.addItem();
    }
  },
  removeTodo: function(id){
    todoModel.removeItem(id);
  },
  editTodoTitle: function(id, newTitle, event){
    if (event.which === 13
      && typeof newTitle === 'string'
      && newTitle.length > 0 
    ) {
      todoModel.editTitle(id, newTitle);
    } else if (
      event.which === 27
    ) {
      todoModel.ignoreEdit(id);
    }
  },
  startEditMode: function(id){
    todoModel.startEditing(id);
  }
};

module.exports = dispatcher;
