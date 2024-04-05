import './spinner.styles.scss';

const SpinnerComponent = () => {
  return (
    <div data-testid='spinner' className='spinner-overlay'>
      <div className='spinner-container'></div>
    </div>
  );
}

export default SpinnerComponent;
