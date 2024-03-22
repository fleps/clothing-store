import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategories } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/category.reducer';
import CategoryListPage from '../category-list-page/category-list-page.component';
import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isApiSubscribed = true;

    const getCategoriesMap = async () => {
      if (isApiSubscribed) {
        const categoriesArray = await getCategories();
        dispatch(setCategories(categoriesArray));
      }
    }
    getCategoriesMap();

    return () => {
      isApiSubscribed = false;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Routes>
      <Route index element={<CategoryListPage />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}

export default Shop;
