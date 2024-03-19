import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  isMinicartOpen: false,
  setIsMinicartOpen: () => { },
  showMinicart: false,
  setShowMinicart: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeOrDecreaseItem: () => {},
  bagCount: 0
});

export const MinicartProvider = ({ children }) => {
  const [isMinicartOpen, setIsMinicartOpen] = useState(false);
  const [showMinicart, setShowMinicart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [bagCount, setBagCount] = useState(0);
  const location = useLocation();

  const addItemToCart = (productToAdd) => {
    setCartItems(handleItemAdd(cartItems, productToAdd));
  }

  const removeOrDecreaseItem = (...params) => {
    setCartItems(handleRemoveOrDecreaseItem(cartItems, ...params));
  }

  useEffect(() => {
    const newBagCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setBagCount(newBagCount);
  }, [cartItems]);

  useEffect(() => {
    if (bagCount > 0 && location.pathname !== '/checkout') {
      setIsMinicartOpen(true);
      setShowMinicart(true);
    }
  }, [bagCount]);

  useEffect(() => {
    if (showMinicart) {
      setIsMinicartOpen(false);
      setShowMinicart(false);
    }
  }, [location]);


  const value = { isMinicartOpen, setIsMinicartOpen, showMinicart, setShowMinicart, addItemToCart, cartItems, bagCount, removeOrDecreaseItem }

  return (
    <MinicartContext.Provider value={value}>{children}</MinicartContext.Provider>
  );
}