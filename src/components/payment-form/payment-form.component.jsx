import { CardElement } from '@stripe/react-stripe-js';

import Button from '../button/button.component';

import './payment-form.styles.scss';

const PaymentFormComponent = () => {
  return (
    <div className='payment-form-container'>
      <h2>Credit Card Payment</h2>
      <form action='' className='payment-form'>
        <CardElement />
        <Button style={'inverted'} label={'Pay Now'} />
      </form>
    </div>
  );
}

export default PaymentFormComponent;
