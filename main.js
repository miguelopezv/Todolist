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
    this.todos.splice(position, 1);
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
      todos = this.todos;

    this.todos.forEach(function(todo) {
      if (todo.completed) {
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
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
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
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


    todoList.todos.forEach(function(todo, position) {
        var todoLi = document.createElement('li');
        var todoTextWithCompletion = "( ) " + todo.todoText;

        if (todo.completed === true) {
          todoTextWithCompletion = "(X) " + todo.todoText;
        }

        todoLi.id = position;
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event) {

      var elementClicked = event.target;
      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
