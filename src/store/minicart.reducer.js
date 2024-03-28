import { createSlice } from '@reduxjs/toolkit';

const MINICART_INITIAL_STATE = {
  openMinicart: false,
  cartItems: [],
  bagCount: 0,
  bagTotalPrice: 0
}

const handleItemAdd = (cartItems, productToAdd) => {
  // Better approach, the one suggested by the course (commented below) transverse the same array twice for some reason, bad practice.
  const sameProdIndex = cartItems.findIndex(item => item.id === productToAdd.id);

  if (sameProdIndex > -1) {
    const newCartItems = [...cartItems];
    newCartItems[sameProdIndex].quantity += 1;

    return newCartItems;
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];

  /* const productExists = cartItems.some(item => item.id === productToAdd.id);

  // If found, increment quantity
  if (productExists) {
    return cartItems.map(item => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    })
  }

  // return new array with modified cartItems/ new cartItem
  return [...cartItems, {...productToAdd, quantity: 1}]; */
};

const handleRemoveOrDecreaseItem = (cartItems, productToModify, directRemove = false) => {
  const prodIdx = cartItems.findIndex(item => item.id === productToModify.id);

  if (prodIdx > -1) {
    const newCartItems = [...cartItems];
    const product = newCartItems[prodIdx];

    if (product.quantity > 1 && !directRemove) {
      product.quantity -= 1;
    } else {
      newCartItems.splice(prodIdx, 1);
    }

    return newCartItems;
  }
}

export const minicartSlice = createSlice({
  name: 'minicart',
  initialState: MINICART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      state.cartItems = handleItemAdd(state.cartItems, action.payload);
    },
    removeOrDecreaseItem(state, action) {
      const { product, directRemove } = action.payload;
      state.cartItems = handleRemoveOrDecreaseItem(state.cartItems, product, directRemove);
    },
    toggleMinicart(state, action) {
      state.openMinicart = action.payload;
    }
  }
});

export const { addItemToCart, removeOrDecreaseItem, toggleMinicart } = minicartSlice.actions;
export const minicartReducer = minicartSlice.reducer;

/* Old manual Redux implementation

export const toggleMinicart = (boolean) => {
  return { type: MINICART_ACTION_TYPES.TOGGLE_MINICART, payload: boolean }
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = handleItemAdd(cartItems, productToAdd);
  return { type: MINICART_ACTION_TYPES.SET_CAR_ITEMS, payload: newCartItems }
}

export const removeOrDecreaseItem = (cartItems, ...params) => {
  const newCartItems = handleRemoveOrDecreaseItem(cartItems, ...params);
  return { type: MINICART_ACTION_TYPES.SET_CAR_ITEMS, payload: newCartItems }
}

export const minicartReducer = (state = MINICART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case MINICART_ACTION_TYPES.SET_CAR_ITEMS:
      return {
        ...state,
        cartItems: payload
      }
    case MINICART_ACTION_TYPES.TOGGLE_MINICART:
      return {
        ...state,
        openMinicart: payload
      }
    default:
      return state;
  }
} */
