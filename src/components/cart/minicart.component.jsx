import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MinicartContext } from '../../contexts/minicart.context';
import CartItem from './cart-item.component.jsx';
import Button from '../button/button.component';
import './minicart.styles.scss';

const Minicart = () => {
  const { isMinicartOpen, setShowMinicart, cartItems } = useContext(MinicartContext);

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
            <Link className='button-container' to={'/checkout'}>Checkout</Link>
          </>
        )
      }
    </div>
  );
}

export default Minicart;
