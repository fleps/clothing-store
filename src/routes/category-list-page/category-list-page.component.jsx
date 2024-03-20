import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { Link } from 'react-router-dom';

const CategoryListPage = () => {
  const { categoriesMap } = useContext(CategoriesContext)

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
