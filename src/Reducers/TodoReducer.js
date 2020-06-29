import { ADD_TODO } from '../Actions/ActionTypes';

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newState = Object.assign({}, state);
      newState.todos.push(action.payload);
      return newState;
      break;
    default: 
      return state;
  }
};