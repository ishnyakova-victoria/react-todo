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
    default:
      return state;
  }
}
