import { todos, pushToLocal } from './display.js';

const removeAllCompleted = () => {
  const newTaskArr = todos.filter((todos) => todos.completed === false);
  for (let i = 0; i < newTaskArr.length; i += 1) {
    newTaskArr[i].index = i + 1;
  }
  todos.splice(0, todos.length, ...newTaskArr);
  pushToLocal();
};

export default removeAllCompleted;