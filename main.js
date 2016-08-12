// Object
var todoList = {
  // property with saves the todos in an array
  todos: [],

  // Method to create a todo object
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  // Method to edit todos
  changeTodo: function(position, todoText) {
    this.todos[position - 1].todoText = todoText;
  },

  // Method to delete todos
  deleteTodo: function(position) {
    this.todos.splice(position - 1, 1);
  },

  // Method to toggle 'completed' property
  toggleCompleted: function(position) {
    var todo = this.todos[position - 1];
    todo.completed = !todo.completed;
  },

  // Method to toggle all todos
  toggleAll: function() {
    var completedTodos = 0,
      totalTodos = this.todos.length,
      todos = this.todos,
      toggle = function(value) {
        for (var i = 0; i < totalTodos; i++) {
          todos[i].completed = value;
        }
      };

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed) {
        completedTodos++;
      }
    }

    if (completedTodos === totalTodos) {
      toggle(false);
    } else {
      toggle(true);
    }
  }
};

// Handler object to call methods from the HTML
var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodos(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoTextInput.value = "";
    changeTodoPositionInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

// View object to display content on the HTML
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = "( ) " + todo.todoText;

      if (todo.completed === true) {
        todoTextWithCompletion = "(X) " + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};
