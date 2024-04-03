import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test.utils';
import CartIcon from '../cart-icon.component';
import { expect } from 'vitest';

describe('Cart Icon Tests', () => {
  test('Uses preload state', () => {
    const initCartItems = [
      { id: 1, name: 'item A', imageUrl: 'test', price: 10, quantity: 1 }
    ];

    renderWithProviders(<CartIcon />, {
      preloadState: {
        minicart: {
          cartItems: initCartItems
        }
      }
    })

    const iconElement = screen.getByText('1');
    expect(iconElement).toBeDefined();
  });

});
