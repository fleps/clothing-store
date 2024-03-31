import './button.styles.scss';

type ButtonProps = {
  label: string;
  style: string;
}

const Button = ({ label, style, ...otherProps }: ButtonProps) => {
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
