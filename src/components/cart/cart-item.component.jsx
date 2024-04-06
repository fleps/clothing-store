import { memo } from 'react';

import './cart-item.styles.scss';

// eslint-disable-next-line react/display-name
const CartItem = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='minicart-item'>
      <img src={imageUrl} alt={`${name} image`} loading='lazy' />
      <div className='item-details'>
        <h3 className='name'>{name}</h3>
        <span className='info'>
          Qty: {quantity} <br/>
          <span className='price'>$ {price.toFixed(2)}</span>
        </span>
      </div>
    </div>
  );
})

export default CartItem;
