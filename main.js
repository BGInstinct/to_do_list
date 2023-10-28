const todoList = [];

function updateTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const element = todoList[i];
    const {name, date} = element
    const html = `
    <div> ${name}</div>
    <div> ${date}</div>
    <button class="delete" onclick="todoList.splice(${i}, 1); 
    updateTodoList();">
      Delete
    </button>`;

  todoListHTML += html;
  }

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