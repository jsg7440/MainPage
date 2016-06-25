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
  removeTodo: function(id){
    todoModel.removeItem(id);
  },
  editTodoTitle: function(id, newTitle, event){
    if (event.which === 13
      && typeof newTitle === 'string'
      && newTitle.length > 0 
    ) {
      todoModel.editTitle(id, newTitle);
    }
  },
  startEditMode: function(id){
    todoModel.startEditing(id);
  }
};

module.exports = dispatcher;
