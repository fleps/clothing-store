const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: 'SET_CATEGORIES'
}

const CATEGORIES_INITIAL_STATE = {
  categories: []
};

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
};