import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/category.selector';
import ProductCard from '../../components/product-card/product-card.component';

const CategoryListPage = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div className='container page-container'>
      {
        Object.keys(categoriesMap).map(title => {
          return (
            <div className='cat-wrapper' key={title}>
              <h2 className='cat-name'>
                {title}
                <Link className='see-link' to={title}>
                  See all {categoriesMap[title].length} products »
                </Link>
              </h2>
              <div className='shop-container'>
                {categoriesMap[title].slice(0, 4).map((product) => {
                    return (
                      <ProductCard key={product.id} product={product} />
                    )
                })}
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default CategoryListPage;
