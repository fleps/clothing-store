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

export const MinicartContext = createContext({
  isMinicartOpen: false,
  setIsMinicartOpen: () => { },
  showMinicart: false,
  setShowMinicart: () => { },
  cartItems: [],
  addItemToCart: () => { },
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

  useEffect(() => {
    const newBagCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setBagCount(newBagCount);
  }, [cartItems]);

  useEffect(() => {
    if (bagCount > 0) {
      setIsMinicartOpen(true);
      setShowMinicart(true);
    }
  }, [bagCount]);

  useEffect(() => {
    setIsMinicartOpen(false);
    setShowMinicart(false);
  }, [location]);


  const value = { isMinicartOpen, setIsMinicartOpen, showMinicart, setShowMinicart, addItemToCart, cartItems, bagCount }

  return (
    <MinicartContext.Provider value={value}>{children}</MinicartContext.Provider>
  );
}