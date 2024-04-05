import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/test/test.utils';
import { expect } from 'vitest';
import { selectCategories, selectCategoriesIsLoading, selectCategoriesMap } from '../store/category.selector';

const mockState = {
  categories: {
    isLoading: false,
    categories: [
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
  }
}

describe('Categories Selectors Test', () => {

  test('selectCategories should return categories data', () => {
    const catSlice = selectCategories(mockState);

    expect(catSlice).toEqual(mockState.categories.categories)
  });

  test('selectCategoriesIsLoading should return isLoading state', () => {
    const isLoading = selectCategoriesIsLoading(mockState);

    expect(isLoading).toEqual(false);
  });

  test('selectCategoriesMap should convert the items array into the appropriate map', () => {
    const expectedMap = {
      mens: [
        {id: 1, name: 'Product 1'},
        {id: 2, name: 'Product 2'}
      ],
      womens: [
        {id: 3, name: 'Product 3'},
        {id: 4, name: 'Product 4'}
      ]
    }
    const catMap = selectCategoriesMap(mockState);

    expect(catMap).toEqual(expectedMap)
  });

});
