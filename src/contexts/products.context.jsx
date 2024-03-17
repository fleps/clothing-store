import { createContext, useState } from 'react';
import mockData from './../shop.data.json';


export const ProductsContext = createContext({
  products: [],
  setShopData: () => []
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(mockData);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}