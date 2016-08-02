var todos = ['item1', 'item2', 'item3'];

// Display Todos list
function displayTodos() {
  console.log('My todos:', todos);
}

// Add a new Todo
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

// Change value of Todo
function changeTodo(position, newTodo) {
  todos[position -1] = newTodo;
  displayTodos();
}

// Delete a Todo
function deleteTodo(position) {
  todos.splice((position - 1), 1);
  displayTodos();
}
