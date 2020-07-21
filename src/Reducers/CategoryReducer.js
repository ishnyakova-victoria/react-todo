import { ADD_CATEGORY } from '../Actions/ActionTypes';

const initialState = {
  categories: [
    {
      id: 1,
      name: 'Category 1'
    }
  ]
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        categories: [
          ...state.categories,
          action.payload
        ]
      };
      break;
    default:
      return state;
  }
};