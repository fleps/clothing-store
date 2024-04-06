import { Link } from 'react-router-dom';
import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  return (
    <div className='category-container large'>
      <Link to={route} className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
        }}></Link>
        <div className='category-body-container'>
          <h2>{title}</h2>
        </div>
    </div>
  );
}

export default CategoryItem;