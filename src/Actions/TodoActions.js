import { LIST_TODO, ADD_TODO } from './ActionTypes';

export const listTodo = () => {
  return {
    type: LIST_TODO
  };
}

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text
  };
}
