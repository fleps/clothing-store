import './button.styles.scss';

const Button = ({ label = 'dummy button', style = '', ...otherProps }) => {
  return (
    <button
      className={`button-container ${style}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
