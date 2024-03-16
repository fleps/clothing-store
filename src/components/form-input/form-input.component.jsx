import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      {/* set each field value to the destructured values from the top */}
      <input className='form-input' {...otherProps} />
      {
        label && (
          <label
            className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
            htmlFor={otherProps.name}
          >
            {label}
          </label>
        )
      }
    </div>
  );
};

export default FormInput;