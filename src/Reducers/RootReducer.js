import { combineReducers } from 'redux';
import { todoReducer } from './TodoReducer';
import { categoryReducer } from './CategoryReducer';

export const rootReducer = combineReducers({
  todoReducer,
  categoryReducer
});

export default rootReducer;
