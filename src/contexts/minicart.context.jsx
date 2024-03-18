import { createContext, useState } from 'react';

const handleItemAdd = (cartItems, productToAdd) => {

  const sameProdIndex = cartItems.findIndex(item => item.id === productToAdd.id);

  if (sameProdIndex > -1) {
    const newCartItems = [...cartItems];
    const existingProd = { ...cartItems[sameProdIndex] };
    newCartItems[sameProdIndex] = { ...existingProd, quantity: existingProd.quantity + 1 };

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

export const MinicartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => {}
});

export const MinicartProvider = ({ children }) => {
  const [isMinicartOpen, setIsMinicartOpen] = useState(false);
  const [showMinicart, setShowMinicart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(handleItemAdd(cartItems, productToAdd));
  }

  const value = { isMinicartOpen, setIsMinicartOpen, showMinicart, setShowMinicart, addItemToCart, cartItems }

  return (
    <MinicartContext.Provider value={value}>{children}</MinicartContext.Provider>
  );
}