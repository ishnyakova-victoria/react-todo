import { ADD_TODO, REMOVE_TODO, EDIT_TODO, ADD_CATEGORY, EDIT_CATEGORY, REMOVE_CATEGORY, TOGGLE_CATEGORY } from './ActionTypes';

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

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: category
  };
};

export const editCategory = (category) => {
  return {
    type: EDIT_CATEGORY,
    payload: category
  };
};

export const removeCategory = (categoryId) => {
  return {
    type: REMOVE_CATEGORY,
    payload: categoryId
  };
};

export const toggleCategory = (categoryId) => {
  return {
    type: TOGGLE_CATEGORY,
    payload: categoryId
  };
};