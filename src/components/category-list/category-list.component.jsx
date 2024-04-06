import CategoryItem from '../category-item/category-item.component';
import './categories.styles.scss';

const categories = [
  {
    "id": 1,
    "title": "women's",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    "route": "shop/women's"
  },
  {
    "id": 2,
    "title": "men's",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    "route": "shop/men's"
  },
  {
    "id": 3,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    "route": "shop/hats"
  },
  {
    "id": 4,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    "route": "shop/jackets"
  },
  {
    "id": 5,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    "route": "shop/sneakers"
  },
]

const CategoryList = () => {
  return (
    <div className='container'>
      <div className='categories-container'>
        { categories.map(category => {
          return <CategoryItem key={category.id} category={category} />
        })}
      </div>
    </div>
  );
}

export default CategoryList;
