const todoList = [];

function updateTodoList() {
  let todoListHTML = '';
  todoList.forEach(function(element, index) {
    const { name, date } = element
    const html = `
    <div> ${name}</div>
    <div> ${date}</div>
    <button class="delete" onclick="todoList.splice(${index}, 1); 
    updateTodoList();">
      Delete
    </button>`;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list-elements').innerHTML = todoListHTML;
}

function addTodo() {

  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;

  todoList.push({name, date});

  document.querySelector('.js-name-input').value = '';
  updateTodoList();
}

updateTodoList();