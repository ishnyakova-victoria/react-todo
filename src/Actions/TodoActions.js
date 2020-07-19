import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from './ActionTypes';

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

export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo
  };
};