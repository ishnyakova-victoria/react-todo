import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from '../Actions/ActionTypes';

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          action.payload
        ]
      };
      break;
    case REMOVE_TODO:
      return {
        todos: [...state.todos].filter((todo) => {
          return todo.id !== action.payload;
        })
      };
      break;
    case EDIT_TODO: 
      return {
        todos: [...state.todos].map((todo) => {
          return (todo.id === action.payload.id) ? action.payload : todo;
        })
      };
      break;
    default: 
      return state;
  }
};