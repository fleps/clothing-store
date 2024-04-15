import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItemToCart, removeOrDecreaseItem } from '../../store/minicart.reducer';
import { selectBagTotalPrice, selectCartItems } from '../../store/minicart.selector';

import './cart.styles.scss';

const CartComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const bagTotalPrice = useSelector(selectBagTotalPrice);

  const handleAddToCart = (product) => {
    if (product.quantity < 10) {
      dispatch(addItemToCart(product));
    }
  };
  const handleRemoveOrDecrease = (product, directRemove = false) => dispatch(removeOrDecreaseItem({ product, directRemove }));

  return (
    <div className={`container cart-container ${!cartItems.length && 'empty-container'}`}>
      {
        cartItems.length > 0 && (
          <>
            <h1>Cart</h1>
            <div className='total'>
              <span>Total:</span> $ {bagTotalPrice.toFixed(2)}
            </div>
          </>
        )
      }
      {
        !cartItems.length ? (
          <div>
            <h2>Your Cart is empty</h2>
            <Link className='button-container' to={'/shop'}>Go Shopping</Link>
          </div>
        ) : (
          <>
            <div className='cart-header semibold-barlow-cond'>
              <div className='header-block'>Product</div>
              <div className='header-block'></div>
              <div className='header-block text-center'>Quantity</div>
              <div className='header-block text-right'>Unit Price</div>
              <div className='header-block'></div>
            </div>
            {
              cartItems.map(item => {
                return (
                  <div key={item.id} className='cart-item-container'>
                    <div className='image-container'>
                      <img src={item.imageUrl} alt='' />
                    </div>
                    <div className='name medium-barlow-cond'>
                      {item.name}
                    </div>
                    <div className='quantity'>
                      <button
                        type='button'
                        onClick={() => handleRemoveOrDecrease(item)}
                      >
                        -
                      </button>
                      <span className='value'>{item.quantity}</span>
                      <button type='button'
                        onClick={() => handleAddToCart(item)}>+</button>
                    </div>
                    <div className='price text-right'>
                      $ {item.price.toFixed(2)}
                    </div>
                    <div className='remove-button text-center'>
                      <button
                        type='button'
                        onClick={() => handleRemoveOrDecrease(item, true)}
                      >&#10005;</button>
                    </div>
                  </div>
                )
              })
            }
          </>
        )
      }
    </div>
  );
}

export default CartComponent;
