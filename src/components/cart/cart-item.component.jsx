import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='minicart-item'>
      <img src={imageUrl} alt={`${name} image`} />
      <div className='item-details'>
        <h3 className='name'>{name}</h3>
        <span className='info'>
          Qty: {quantity} <br/>
          <span className='price'>$ {price.toFixed(2)}</span>
        </span>
      </div>
    </div>
  );
}

export default CartItem;
