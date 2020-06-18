import { LIST_TODO, ADD_TODO } from '../Actions/ActionTypes';

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_TODO: 
      return Object.assign({}, state);
    case ADD_TODO:
      return Object.assign({}, state).todos.push(action.payload);
    default: 
      return state;
  }
}
