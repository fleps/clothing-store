import { expect } from 'vitest';
import { categoriesReducer, fetchCategories, CATEGORIES_INITIAL_STATE } from '../store/category.reducer';


describe('Category Reducer tests', () => {
  test('Fetch Loading', () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true
    }

    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategories())).toEqual(expectedState);
  });

  test('Fetch Success', () => {
    const mockData = [
      {
        title: 'mens',
        imageUrl: 'test',
        items: [
          {id: 1, name: 'Product 1'},
          {id: 2, name: 'Product 2'}
        ]
      },
      {
        title: 'womens',
        imageUrl: 'test2',
        items: [
          {id: 3, name: 'Product 3'},
          {id: 4, name: 'Product 4'}
        ]
      }
    ]

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockData
    }

    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategories.fulfilled(mockData))).toEqual(expectedState);
  });

  test('Fetch Failed', () => {
    const mockError = 'Error: failed';
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError
    }

    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategories.rejected(mockError))).toEqual(expectedState);
  });

});
