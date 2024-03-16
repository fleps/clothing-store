import RegisterForm from '../../components/register-form/register-form.component.jsx';
import LoginForm from '../../components/login-form/login-form.component.jsx';
import './login.styles.scss';

const Login = () => {

  return (
    <div className='login-wrapper container'>
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default Login;
