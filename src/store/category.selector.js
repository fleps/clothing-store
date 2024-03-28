import { createSelector } from 'reselect';

const categoryReducerSelector = (state) => state.categories;

export const selectCategories = createSelector(
  [categoryReducerSelector], //input selector
  (categoriesSlice) => categoriesSlice.categories //combiner, output
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [categoryReducerSelector],
  (categoriesSlice) => categoriesSlice.isLoading
)