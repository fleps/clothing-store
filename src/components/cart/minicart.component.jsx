import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MinicartContext } from '../../contexts/minicart.context';
import CartItem from './cart-item.component.jsx';
import './minicart.styles.scss';

const Minicart = () => {
  const { openMinicart, setOpenMinicart, cartItems, bagTotalPrice } = useContext(MinicartContext);
  const location = useLocation();

  useEffect(() => {
    if (openMinicart) {
      setOpenMinicart(false);
    }
  }, [location]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`minicart-container ${openMinicart && location.pathname !== '/checkout' ? 'to-show' : 'to-hide'}`}>
      <div className='minicart-content'>
        <button type='button' className='close-minicart' onClick={() => setOpenMinicart(false)}>&#10005;</button>
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
