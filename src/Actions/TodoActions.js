import { ADD_TODO, REMOVE_TODO } from './ActionTypes';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    payload: todoId
  };
};
