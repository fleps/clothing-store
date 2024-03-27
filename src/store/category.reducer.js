import { createSlice } from '@reduxjs/toolkit';

const CATEGORIES_INITIAL_STATE = {
  categories: []
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    }
  }
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

/* Old manual REDUX implementation

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload
      }
    default:
      return state;
  }
};

export const setCategories = (categoriesArray) => {
  return { type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES, payload: categoriesArray };
}; */