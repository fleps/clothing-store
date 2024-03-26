import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, toggleMinicart } from '../../store/minicart.reducer';
import { selectCartItems } from '../../store/minicart.selector';

import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    dispatch(toggleMinicart(true));
  };

  return (
    <div className='product-card-container'>
      <div className='img-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='product-footer'>
        <h3 className='name'>{name}</h3>
        <p className='price'>$ {price.toFixed(2)}</p>
      </div>
      <Button type='button' style='' label='Add to cart' onClick={addProductToCart} />
    </div>
  );
}

export default ProductCard;
