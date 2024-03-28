import { createSelector } from 'reselect';

const minicartReducerSelector = (state) => state.minicart;

export const selectCartItems = createSelector(
  [minicartReducerSelector], //input selector
  (minicart) => minicart.cartItems //combiner, output
);

export const selectOpenMinicart = createSelector(
  [minicartReducerSelector],
  (minicart) => minicart.openMinicart
);

export const selectBagCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems
    ? cartItems.reduce((totalQty, cartItem) => totalQty + cartItem.quantity, 0)
    : 0
);

export const selectBagTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => cartItems
    ? cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0)
    : 0
);
