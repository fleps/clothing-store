import { Routes, Route } from 'react-router-dom';
import CategoryListPage from '../category-list-page/category-list-page.component';
import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
  return (
    <>
      <Routes>
        <Route index element={<CategoryListPage />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </>
  );
}

export default Shop;
