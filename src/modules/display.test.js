/**
 * @jest-environment jsdom
 */

import { addNewList, removeList } from './display.js';

describe('Testing remove and add functions', () => {
  test('addNewList adds a new task to the todos list', () => {
    // Arrange
    const task = {
      index: 1,
      description: 'Test task',
      completed: false,
    };

    // Act
    addNewList();

    // Assert
    const todos = JSON.parse(localStorage.getItem('todos'));
    expect(todos).toHaveLength(1);
    expect(todos[0]).toEqual(task);
  });

  test('Should delete one task', () => {
    const todos = [{
      index1: 1,
      description: 'Buy milk',
      completed: false,
    },

    ];
    const index1 = 1;
    localStorage.setItem('todos', JSON.stringify(todos));

    removeList(index1);

    expect(todos).toHaveLength(1);
    expect(todos).toEqual([{
      index1: 1,
      description: 'Buy milk',
      completed: false,
    }]);
  });
});