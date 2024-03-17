import { useContext } from 'react';
import { MinicartContext } from '../../contexts/minicart.context';

import bagIcon from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isMinicartOpen, setIsMinicartOpen, showMinicart, setShowMinicart } = useContext(MinicartContext);
  const toggleMinicart = () => {
    setIsMinicartOpen(!isMinicartOpen);
    if (!showMinicart) setShowMinicart(true);
  }

  return (
    <button type='button' className='cart-icon-container' onClick={toggleMinicart}>
      <img className='shopping-icon' src={bagIcon} alt='' />
      <span className='item-count'>0</span>
    </button>
  );
}

export default CartIcon;
