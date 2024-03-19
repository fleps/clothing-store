import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MinicartContext } from '../../contexts/minicart.context';
import CartItem from './cart-item.component.jsx';
import './minicart.styles.scss';

const Minicart = () => {
  const { isMinicartOpen, setShowMinicart, cartItems, bagTotalPrice } = useContext(MinicartContext);

  return (
    <div className={`minicart-container ${isMinicartOpen ? 'to-show' : 'to-hide'}`}
      onAnimationEnd={() => {if (!isMinicartOpen) setShowMinicart(false)}}
    >
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
  );
}

export default Minicart;
