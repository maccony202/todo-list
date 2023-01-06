import { addNewList, removeList } from "./variables.js";

jest.mock('./variables.js');

describe('Testing remove and add functions', () => {
    //Test for adding
    test('when you addNewList() adds a new task', () => {
      addNewList();
      addNewList();
      addNewList();
      addNewList();
      const todos = JSON.parse(localStorage.getItem('todos'));
      expect(todos.length).toBe(4);
    });
  //Test for deleting
    test('Should delete one task', () => {
      removeList(0);
      const todos = JSON.parse(localStorage.getItem('todos'));
      expect(todos.length).toBe(3);
    })
  });