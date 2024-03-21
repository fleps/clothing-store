import { createContext, useState, useReducer } from 'react';

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

export const MinicartContext = createContext({
  openMinicart: false,
  toggleMinicart: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeOrDecreaseItem: () => {},
  bagCount: 0,
  bagTotalPrice: 0
});

const INITIAL_STATE = {
  openMinicart: false,
  cartItems: [],
  bagCount: 0,
  bagTotalPrice: 0
}

const MINICART_ACTION_TYPES = {
  SET_CAR_ITEMS: 'SET_CAR_ITEMS',
  TOGGLE_MINICART: 'TOGGLE_MINICART'
}

const minicartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case MINICART_ACTION_TYPES.SET_CAR_ITEMS:
      return {
        ...state,
        ...payload
      }
    case MINICART_ACTION_TYPES.TOGGLE_MINICART:
      return {
        ...state,
        openMinicart: payload
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
}

export const MinicartProvider = ({ children }) => {
  const [{ openMinicart, cartItems, bagCount, bagTotalPrice }, dispatch] = useReducer(minicartReducer, INITIAL_STATE);

  const updateMinicartReducer = (newCartItems) => {
    const newBagCount = newCartItems.length
      ? newCartItems.reduce((totalQty, cartItem) => totalQty + cartItem.quantity, 0)
      : 0;
    const newBagTotalPrice = newCartItems.length
      ? newCartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0)
      : 0;

    dispatch({
      type: MINICART_ACTION_TYPES.SET_CAR_ITEMS,
      payload: {
        cartItems: newCartItems,
        bagCount: newBagCount,
        bagTotalPrice: newBagTotalPrice
      }
    });
  };

  const toggleMinicart = (value) => {
    dispatch({
      type: MINICART_ACTION_TYPES.TOGGLE_MINICART,
      payload: value
    });
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = handleItemAdd(cartItems, productToAdd);
    updateMinicartReducer(newCartItems);
    toggleMinicart(true);
  }

  const removeOrDecreaseItem = (...params) => {
    const newCartItems = handleRemoveOrDecreaseItem(cartItems, ...params);
    updateMinicartReducer(newCartItems);
    if (!newCartItems.length && openMinicart) {
      toggleMinicart(false);
    }
  }

  const value =
    {
      openMinicart,
      toggleMinicart,
      cartItems,
      addItemToCart,
      removeOrDecreaseItem,
      bagCount,
      bagTotalPrice
    };

  return (
    <MinicartContext.Provider value={value}>{children}</MinicartContext.Provider>
  );
}