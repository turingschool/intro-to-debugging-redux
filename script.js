var newTodoTextArea = document.querySelector('#new-todo-text');
var addTodoBtn = document.querySelector('#new-todo-add');
var todoList = document.querySelector('#todo-list');

addTodoBtn.addEventListener('click', addTodo);
newTodoTextArea.addEventListener('input', toggleDisabled)


function addTodo(event) {
  var todoText = newTodoTextArea.value;
  var newTodo = document.createElement('li');
  newTodo.classList.add('list__list-item', 'todo');
  newTodo.innerHTML = `<span class="todo__state">
        <input class="todo__state__input todo__input" type="checkbox">
        ${todoText}
      </span>
      <button class="todo__state__button todo__button todo__button--active todo__button--inactive">X</button>
      `
  todoList.appendChild(newTodo);
}

function toggleDisabled(event) {
  if(this.value) {
    addTodoBtn.disabled = false;
  } else {
    addTodoBtn.disabled = true;
  }
}