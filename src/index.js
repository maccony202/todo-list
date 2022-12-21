// import _ from 'lodash';
import './style.css';
import displayTodoTask from './modules/myFunction.js';

window.addEventListener('load', () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const TodoForm = document.querySelector('#todo-form');

  TodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = {
      contents: e.target.elements.content.value,
      done: false,
      id: todos.length + 1,
    };

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    e.target.reset();

    displayTodoTask();
  });

  displayTodoTask();
});
