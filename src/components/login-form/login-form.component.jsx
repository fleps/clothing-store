import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  loginUserWithEmailPwd
} from '../../utils/firebase/firebase.utils.js';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './login-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const clearForm = () => {
    setFormFields(defaultFormFields);
  };

  const loginWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  // Handle the submit, async as it uses external auth
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //Login methods
      const response = await loginUserWithEmailPwd(email, password);

      // If successful, continue.
      console.log(response);

      clearForm();

    } catch (error) {
      console.log(`User authentication error: ${error}`);
    }
  };

  // Basic function called by the inputs onChange event
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='login-container'>
      <h2>I already have an account</h2>
      <span>Login with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='text'
          name='email'
          onChange={handleChange}
          value={email} required
        />
        <FormInput
          label='Password'
          type='password'
          name='password'
          onChange={handleChange}
          value={password} required
        />
        <div className='buttons-wrapper'>
          <Button type='submit' style='' label='Login' />
          <Button onClick={loginWithGoogle} type='button' style='google-sign-in' label='Login with Google' />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;