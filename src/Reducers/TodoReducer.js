import { ADD_TODO } from '../Actions/ActionTypes';

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state).todos.push(action.payload);
      break;
    default: 
      return state;
  }
}
