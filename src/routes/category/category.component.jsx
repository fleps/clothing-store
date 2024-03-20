import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className='container page-container'>
      <h2 className='cat-page-name'>
        {category}
        <span className='product-count'>
          {products && ` ${products.length} products`}
        </span>
      </h2>
      <div className='shop-container'>
        {products && products.map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
        })}
      </div>
    </div>
  );
}

export default Category;
