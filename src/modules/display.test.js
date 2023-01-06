/**
 * @jest-environment jsdom
 */

import { addNewList, removeList } from "./variables.js";

// jest.mock('./variables.js');
describe('Testing remove and add functions', () => {
    //Test for adding
    test('when you addNewList() adds a new task', () => {
        //Arrange 
        const addItems = {value: 'Buy milk'};
        const todos = [];

        //Act
      addNewList();

      //Assert
      expect(todos).toHaveLength(1);
      expect(todos[0]).toEqual({
        index: 1,
        description: 'Buy milk',
        completed: false,
      });
      
    });
  //Test for deleting
    test('Should delete one task', () => {
        //Arrange
        const todos = [{
            index: 1,
            description: 'Buy milk',
            completed: false,
        }];
        const index = 1
        localStorage.setItem('todos',JSON.stringify(todos));
        //Act
      removeList(index);

      //Assert
      expect(todos).toHaveLength(1);
      expect(todos).toEqual({
        index: 1,
        description: 'Do Laundary',
        completed: false
      });
    })
  });