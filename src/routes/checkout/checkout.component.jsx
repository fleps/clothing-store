import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeOrDecreaseItem } from '../../store/minicart.reducer';
import { selectBagTotalPrice, selectCartItems } from '../../store/minicart.selector';

import './checkout.styles.scss';
import { Link } from 'react-router-dom';

const CheckoutComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const bagTotalPrice = useSelector(selectBagTotalPrice);

  const handleAddToCart = (product) => dispatch(addItemToCart(product));
  const handleRemoveOrDecrease = (product, toRemove) => dispatch(removeOrDecreaseItem(product, toRemove));

  return (
    <div className='container checkout-container'>
      <h1>Checkout</h1>
      {
        !cartItems.length ? (
          <>
            <h2>Your Checkout is empty</h2>
            <Link className='button-container' to={'/shop'}>Go Shopping</Link>
          </>
        ) : (
          <>
            <div className='checkout-header semibold-barlow-cond'>
              <div className='header-block'>Product</div>
              <div className='header-block'></div>
              <div className='header-block text-center'>Quantity</div>
              <div className='header-block text-right'>Unit Price</div>
              <div className='header-block'></div>
            </div>
            {
              cartItems.map(item => {
                return (
                  <div key={item.id} className='checkout-item-container'>
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
            <div className='total'>
              Total: $ {bagTotalPrice.toFixed(2)}
            </div>
          </>
        )
      }
    </div>
  );
}

export default CheckoutComponent;
