import { listItems } from './variables.js';
import checkedBox from './complete.js';

// eslint-disable-next-line import/no-mutable-exports
export let todos = [];

const pushToLocal = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// const addNewList = () => {
//     const task = {};
//     task.index = todos.length + 1;
//     task.description = addItems.value;
//     task.completed = false;
//     todos.push(task);

//     pushToLocal();
//   };

const addNewList = () => {
  const task = {};
  task.description = 'Test task';
  task.completed = false;
  task.index = 1;
  const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  todos.push(task);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const generateList = () => {
  todos.forEach((task) => {
    listItems.innerHTML += `
        
        <li class="task" >
          <div class='item' >
          <input data-action="checkbox" type="Checkbox" id='${task.index}' data-id="${task.index}"  />
          <p class="description" data-action ="edit">"${task.description}" </p>
          </div class='item'>
          
          <div id="edit" class="hide">
         <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
         
          <i data-action="delete" class="fa-regular fa-trash-can" id="removeBtn"></i>
         
        </li>
        `;
    task.value = '';
  });
};

const completed = (id) => {
  if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos[id].completed = true;
  pushToLocal();
};

const notCompleted = (id) => {
  if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos[id].completed = false;
  pushToLocal();
};

const showList = () => {
  if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  generateList();
};

const editTask = (id, value) => {
  todos[id].description = value;
  pushToLocal();
};

const removeList = (index) => {
  if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.splice(index - 1, 1);
  for (let i = 1; i < todos.length; i += 1) {
    todos[i - 1].index = i;
  }
  pushToLocal();
};

const checkCompleted = (buttonId, box) => {
  box.nextElementSibling.classList.toggle('mark-completed');
  todos[buttonId].completed = checkedBox(box);
  pushToLocal(todos);
  if (todos[buttonId].completed === true) {
    box.checked = true;
    box.nextElementSibling.classList.add('mark-completed');
  }
};

export {
  addNewList,
  generateList,
  pushToLocal,
  showList,
  removeList,
  checkCompleted,
  editTask,
  completed,
  notCompleted,
};