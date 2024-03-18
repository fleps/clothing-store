import { useContext } from 'react';
import { MinicartContext } from '../../contexts/minicart.context';
import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(MinicartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <div className='img-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='product-footer'>
        <h3 className='name'>{name}</h3>
        <p className='price'>{price}</p>
      </div>
      <Button type='button' style='' label='Add to cart' onClick={addProductToCart} />
    </div>
  );
}

export default ProductCard;
