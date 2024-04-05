import { screen } from '@testing-library/react';
import Minicart from '../components/cart/minicart.component';
import { renderWithProviders } from '../utils/test/test.utils';
import { expect } from 'vitest';

describe('Minicart Tests', () => {
  test('It should have empty messagge if no products', () => {
    renderWithProviders(<Minicart />, {
      preloadState: {
        minicart: {
          cartItems: []
        }
      }
    });

    const minicartEl = screen.queryByTestId('minicart');
    expect(minicartEl).toHaveTextContent(/Your cart is empty/i);
  });

  test('It should NOT have empty messagge if has products', () => {
    const initCartItems = [
      { id: 1, name: 'item A', imageUrl: 'test', price: 10, quantity: 1 }
    ];

    renderWithProviders(<Minicart />, {
      preloadState: {
        minicart: {
          cartItems: initCartItems
        }
      }
    });

    const minicartEl = screen.queryByTestId('minicart');
    expect(minicartEl).to.not.toHaveTextContent(/Your cart is empty/i);
  });
});
