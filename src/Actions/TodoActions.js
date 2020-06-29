import { ADD_TODO } from './ActionTypes';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};
