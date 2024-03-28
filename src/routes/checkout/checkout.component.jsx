import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { addItemToCart, removeOrDecreaseItem } from '../../store/minicart.reducer';
import { selectBagTotalPrice, selectCartItems } from '../../store/minicart.selector';

import './checkout.styles.scss';

const CheckoutComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const bagTotalPrice = useSelector(selectBagTotalPrice);
  const location = useLocation();

  const handleAddToCart = (product) => dispatch(addItemToCart(product));
  const handleRemoveOrDecrease = (product, directRemove = false) => dispatch(removeOrDecreaseItem({ product, directRemove }));

  useLayoutEffect(() => {
    window.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className={`container checkout-container ${!cartItems.length && 'empty-container'}`}>
      <h1>Checkout</h1>
      {
        cartItems.length > 0 && (
          <div className='total'>
            <span>Total:</span> $ {bagTotalPrice.toFixed(2)}
          </div>
        )
      }
      {
        !cartItems.length ? (
          <div className='empty-checkout'>
            <h2>Your Checkout is empty</h2>
            <Link className='button-container' to={'/shop'}>Go Shopping</Link>
          </div>
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
          </>
        )
      }
    </div>
  );
}

export default CheckoutComponent;
