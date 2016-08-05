// Object
var todoList = {
  // property with saves the todos in an array
  todos: [],
  // Method to display all the todos
  displayTodos: function() {
    console.log('My todos', this.todos);
  },
  // Method to create an object
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  // Method to edit todos
  changeTodo: function(position, todoText) {
    this.todos[position - 1].todoText = todoText;
    this.displayTodos();
  },
  // Method to delete todos
  deleteTodo: function(position) {
    this.todos.splice(position -1, 1);
    this.displayTodos();
  },
  // Method to toggle 'completed' property
  toggleCompleted: function(position) {
    var todo = this.todos[position - 1];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
