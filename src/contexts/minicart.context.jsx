import { createContext, useState } from 'react';

export const MinicartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { }
});

export const MinicartProvider = ({ children }) => {
  const [isMinicartOpen, setIsMinicartOpen] = useState(false);
  const [showMinicart, setShowMinicart] = useState(false);
  const value = { isMinicartOpen, setIsMinicartOpen, showMinicart, setShowMinicart }

  return (
    <MinicartContext.Provider value={value}>{children}</MinicartContext.Provider>
  );
}