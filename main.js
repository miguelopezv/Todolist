// Object
var todoList = {
  // property with saves the todos
  todos: ['item1', 'item2', 'item3', 'item4'],
  // Method to display all the todos
  displayTodos: function() {
    console.log('My todos', this.todos);
  },
  // Method to add todos
  addTodos: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  // Method to edit todos
  changeTodo: function(position, newTodo) {
    this.todos[(position - 1)] = newTodo;
    this.displayTodos();
  },
  // Method to delete todos
  deleteTodo: function(position) {
    this.todos.splice((position -1), 1);
    this.displayTodos();
  }
};
