/**
 * @jest-environment jsdom
 */

import {
  addNewList, removeList, editTask, notCompleted, completed,
} from './display.js';

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

  // test for edit
  test('notCompleted sets the completed property of the todo with the specified id to false', () => {
    const todos = [{ id: 1, text: 'todo 1', completed: false }, { id: 2, text: 'todo 2', completed: true }];
    localStorage.setItem('todos', JSON.stringify(todos));
    notCompleted(1);
    const updatedTodos = JSON.parse(localStorage.getItem('todos'));
    expect(updatedTodos[0].completed).toBe(false);
  });

  describe('editTask', () => {
    it('updates the description of the task with the given id', () => {
      const id = 0;
      const value = 'updated task';
      const todos = [{ id: 0, description: 'updated task' }];

      editTask(id, value);

      expect(todos[id].description).toEqual(value);
    });
  });

  describe('completed', () => {
    it('marks the task with the given id as completed', () => {
      const id = 0;
      const todos = [{ id: 0, completed: true }];
      const localStorageMock = {
        getItem: jest.fn().mockReturnValue(JSON.stringify(todos)),
        setItem: jest.fn(),
      };
      global.localStorage = localStorageMock;

      completed(id);

      expect(todos[id].completed).toEqual(true);
    });
  });
});