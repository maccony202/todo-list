// import _ from 'lodash';
 import './style.css';
import { listItems, addItems, addBtn } from './modules/variables.js';
import { addNewList,
          generateList,
          pushToLocal,
          showList,
          removeList,
          checkCompleted,
    } from './modules/display.js';
import removeAllCompleted from './modules/clearComplete.js';
import checkedBox from './modules/complete.js';

window.addEventListener('load', () => {
  showList();
});

addItems.addEventListener('keypress', (e) => {
  const { target } = e;
  if (target.value === '') return;
  if (e.key === 'Enter') {
    addNewList();
  }
});

addBtn.addEventListener('click', () => {
  addNewList();
  generateList();
  pushToLocal();
});

listItems.addEventListener('click', (e) => {
  const { target } = e;
  const parentElement = target.parentNode;
  if (!parentElement.classList.contains('task')) return;
  const eachListId = Number(parentElement.id);
  // target the data action
  const { action } = target.dataset;

  if (action === 'delete') {
    removeList(eachListId);
  }
});

listItems.addEventListener('change', (e) => {
  const { target } = e;
  const parentElement = target.parentNode;
  if (!parentElement.classList.contains('item')) return;
  const eachListId = Number(parentElement.id);
  // target the data action
  const { action } = target.dataset;

  if (action === 'checkbox') {
    checkCompleted(eachListId, target);
    checkedBox(target);
  }
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  removeAllCompleted();
  generateList();
  pushToLocal();
});
