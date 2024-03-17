import { useContext } from 'react';
import { MinicartContext } from '../../contexts/minicart.context';
import Button from '../button/button.component';
import './minicart.styles.scss';

const Minicart = () => {
  const { isMinicartOpen, setShowMinicart } = useContext(MinicartContext);

  return (
    <div className={`minicart-container ${isMinicartOpen ? 'to-show' : 'to-hide'}`}
      onAnimationEnd={() => {if (!isMinicartOpen) setShowMinicart(false)}}
    >
      <h2 className='empty-message'>
        Your cart is empty
      </h2>
      <div className='minicart-items'>
        Items
      </div>
      <Button type='button' style='' label='Checkout' />
    </div>
  );
}

export default Minicart;
