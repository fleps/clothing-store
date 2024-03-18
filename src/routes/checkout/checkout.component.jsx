import './checkout.styles.scss';

const CheckoutComponent = () => {
  return (
    <div>
      <div className='checkout-heading'>
        <div>Product</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Remove</div>
      </div>
      <div className='checkout-item'>
        <div><img src='' alt=''/></div>
        <div>Product Name</div>
        <div>XXX</div>
        <div>$ 90.00</div>
        <div>Remove</div>
      </div>
    </div>
  );
}

export default CheckoutComponent;
