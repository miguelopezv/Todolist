// Object
var todoList = {
  // property with saves the todos in an array
  todos: [],

  // Method to display all the todos
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },

  // Method to create a todo object
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
    this.todos.splice(position - 1, 1);
    this.displayTodos();
  },

  // Method to toggle 'completed' property
  toggleCompleted: function(position) {
    var todo = this.todos[position - 1];
    todo.completed = !todo.completed;
    this.displayTodos();
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
    this.displayTodos();
  }
};

// Handler object to call methods from the HTML
var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodos(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoTextInput.value = "";
    changeTodoPositionInput.value = "";
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      todosUl.appendChild(todoLi);
    }
  }
};
