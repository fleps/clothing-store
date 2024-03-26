import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { selectOpenMinicart, selectBagTotalPrice, selectCartItems } from '../../store/minicart.selector';
import { toggleMinicart } from '../../store/minicart.reducer';

import CartItem from './cart-item.component.jsx';
import './minicart.styles.scss';

const Minicart = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const openMinicart = useSelector(selectOpenMinicart);
  const bagTotalPrice = useSelector(selectBagTotalPrice);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    if (openMinicart) {
      dispatch(toggleMinicart(false));
    }
  }, [location]); //eslint-disable-line react-hooks/exhaustive-deps

  const closeMinicart = () => {
    dispatch(toggleMinicart(false))
  }

  return (
    <div
      className={
        `minicart-container
        ${(openMinicart && location.pathname !== '/checkout')
          ? 'to-show' : 'to-hide'}`}>
      <div className='minicart-content'>
        <button type='button' className='close-minicart' onClick={closeMinicart}>&#10005;</button>
        {
          !cartItems.length ? (
            <h2 className='empty-message'>
              Your cart is empty
            </h2>
          ) : (
            <>
              <div className='minicart-items has-custom-scrollbar'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} /> )}
              </div>
              <div className='minicart-total medium-barlow-cond'>
                Total: <span>$ {bagTotalPrice.toFixed(2)}</span>
              </div>
              <Link className='button-container' to={'/checkout'}>Checkout</Link>
            </>
          )
        }
      </div>
    </div>
  );
}

export default Minicart;
