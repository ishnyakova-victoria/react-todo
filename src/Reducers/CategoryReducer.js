import { ADD_CATEGORY, EDIT_CATEGORY, REMOVE_CATEGORY, TOGGLE_CATEGORY } from '../Actions/ActionTypes';

const initialState = {
  categories: [
    {
      id: 1,
      name: 'Category 1',
      isCollapsed: false
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
    case EDIT_CATEGORY:
      return {
        categories: [...state.categories].map((category) => {
          return category.id === action.payload.id ? action.payload : category;
        })
      };
      break;
    case REMOVE_CATEGORY:
      return {
        categories: [...state.categories].filter((category) => {
          return category.id !== action.payload;
        })
      };
      break;
    case TOGGLE_CATEGORY:
      return {
        categories: [...state.categories].map((category) => {
            return (category.id === action.payload) ? 
              {
                ...category,
                isCollapsed: !category.isCollapsed
              } :
              category;
          })
      };
      break;
    default:
      return state;
  }
};