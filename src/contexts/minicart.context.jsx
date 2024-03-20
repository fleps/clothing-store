import { createContext, useState } from 'react';

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
  setOpenMinicart: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeOrDecreaseItem: () => {},
  bagCount: 0,
  bagTotalPrice: 0
});

export const MinicartProvider = ({ children }) => {
  const [openMinicart, setOpenMinicart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const bagCount = cartItems.length
    ? cartItems.reduce((totalQty, cartItem) => totalQty + cartItem.quantity, 0)
    : 0;
  const bagTotalPrice = cartItems.length
    ? cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0)
    : 0;

  const addItemToCart = (productToAdd) => {
    setCartItems(handleItemAdd(cartItems, productToAdd));
    setOpenMinicart(true);
  }

   const removeOrDecreaseItem = (...params) => {
    setCartItems(handleRemoveOrDecreaseItem(cartItems, ...params));
  }

  const value =
    {
      openMinicart,
      setOpenMinicart,
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