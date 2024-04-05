import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../utils/test/test.utils';
import { expect } from 'vitest';
import ProductCard from '../components/product-card/product-card.component';


describe('Product Card tests', () => {
  test('It should add the product when Product Card button is clicked', async () => {
    const mockProduct = [
      { id: 1, name: 'item A', imageUrl: 'test', price: 10 }
    ];

    const { store } = renderWithProviders(<ProductCard product={mockProduct} />, {
      preloadState: {
        minicart: {
          cartItems: []
        }
      }
    })

    const atcButton = screen.getByText(/add to cart/i);
    await fireEvent.click(atcButton);

    expect(store.getState().minicart.cartItems.length).toBe(1);
  });

});
