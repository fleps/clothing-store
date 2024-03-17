import bagIcon from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

const CartIcon = () => {
  return (
    <button type='button' className='cart-icon-container'>
      <img className='shopping-icon' src={bagIcon} alt='' />
      <span className='item-count'>0</span>
    </button>
  );
}

export default CartIcon;
