import Button from '../button/button.component';
import './minicart.styles.scss';

const Minicart = () => {
  return (
    <div className='minicart-container'>
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
