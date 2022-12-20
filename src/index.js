// import _ from 'lodash';
import './style.css';

const taskList = document.querySelector('.task-list');

const myTodoTask = [
  {
    discription: 'I will finish my project today',
    isComplete: false,
    index: 0,
  },

  {
    discription: 'I will go and watch a football match',
    isComplete: false,
    index: 1,
  },
  {
    discription: 'I will update my Linkdin profile',
    isComplete: false,
    index: 2,
  },

  {
    discription: 'I will go to the gym',
    isComplete: false,
    index: 3,
  },

  {
    discription: 'I will drink cofee',
    isComplete: false,
    index: 4,
  },
];

const displayTodoTask = ({
  discription,
}) => {
  const ul = document.createElement('ul');
  ul.className = 'task-items';
  ul.innerHTML = `
    <li><input type="checkbox"><p>${discription}</p><i class="bi bi-three-dots-vertical"></i></li>
    <hr>
   
    `;

  return (ul);
};

const getTodoTask = () => {
  myTodoTask.forEach((myObject, index) => {
    taskList.append(displayTodoTask(myObject, index));
  });
};

getTodoTask();
