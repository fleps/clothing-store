import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './user.reducer';
import { categoriesReducer } from './category.reducer';
import { minicartReducer } from './minicart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  minicart: minicartReducer
});