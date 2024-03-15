import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils.js';

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={logGoogleUser}>
        Login with Google
      </button>
    </div>
  );
}

export default Login;
