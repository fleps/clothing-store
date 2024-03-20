import { createContext, useState, useEffect } from 'react';
import { getCategories } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    let isApiSubscribed = true;

    const getCategoriesMap = async () => {
      if (isApiSubscribed) {
        const categoriesMap = await getCategories();
        setCategoriesMap(categoriesMap);
      }
    }
    getCategoriesMap();

    return () => {
      isApiSubscribed = false;
    }
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}