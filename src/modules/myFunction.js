import strRemove from './removeStr.js';

export default function displayTodoTask() {
  const todoList = document.querySelector('#list-wrap');
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const todoItems = document.createElement('div');
    todoItems.classList.add('todo-items');

    const label = document.createElement('lable');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const contents = document.createElement('div');
    const actions = document.createElement('div');
    const editBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    input.type = 'checkbox';
    input.checked = todo.done;

    span.classList.add('bubble');
    contents.classList.add('todo-contents');
    actions.classList.add('actions');
    editBtn.classList.add('edit');
    removeBtn.classList.add('remove');

    contents.innerHTML = `<input class= "do" type= "text" value= "${todo.contents}" readonly>`;
    editBtn.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';
    removeBtn.innerHTML = 'remove';

    todoList.appendChild(todoItems);
    todoItems.appendChild(label);
    todoItems.appendChild(contents);
    todoItems.appendChild(actions);
    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(editBtn);
    actions.appendChild(removeBtn);

    editBtn.addEventListener('click', () => {
      const inputs = contents.querySelector('input');
      inputs.removeAttribute('readonly');
      inputs.focus();
      inputs.addEventListener('blur', (e) => {
        inputs.setAttribute('readonly', true);
        todo.contents = e.target.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodoTask();
      });
    });

    removeBtn.addEventListener('click', (e) => {
      strRemove.todo(todo.id);
      e.target.parentElement.parentElement.remove();
    });
  });
}