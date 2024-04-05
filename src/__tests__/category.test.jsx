import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/test/test.utils';
import { expect, vi } from 'vitest';
import Category from '../routes/category/category.component';

vi.mock('react-router-dom', async () => {
  const reactDom = await vi.importActual('react-router-dom');

  return {
    ...reactDom,
    useParams: () => ({
      category: 'mens',
    })
  }
});

describe('Cart Icon Tests', () => {
  test('should spinner if isLoading is true', () => {
    renderWithProviders(<Category />, {
      preloadState: {
        categories: {
          isLoading: true,
          categories: []
        }
      }
    });

    const spinnerEl = screen.getByTestId('spinner');
    expect(spinnerEl).toBeInTheDocument();
  });

  test('If should render categories if isLoading is false', () => {
    renderWithProviders(<Category />, {
      preloadState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: 'mens',
              items: [
                {id: 1, name: 'Product 1'},
                {id: 2, name: 'Product 2'}
              ]
            }
          ]
        }
      }
    });

    const spinnerEl = screen.queryByTestId('spinner');
    expect(spinnerEl).toBeNull();

    const prod1 = screen.getByText(/product 1/i);
    expect(prod1).toBeInTheDocument();
  });

});