import { useContext } from 'react';
import { MinicartContext } from '../../contexts/minicart.context';

import bagIcon from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { openMinicart, toggleMinicart, bagCount } = useContext(MinicartContext);

  const handleMinicartToggle = () => {
    toggleMinicart(!openMinicart);
  }

  return (
    <button type='button' className='cart-icon-container' onClick={handleMinicartToggle}>
      <img className='shopping-icon' src={bagIcon} alt='' />
      <span className='item-count'>{bagCount}</span>
    </button>
  );
}

export default CartIcon;
