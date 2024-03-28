import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { authChangedListener, createUserDocFromAuth } from './utils/firebase/firebase.utils.js';
import { setCurrentUser } from './store/user.reducer.js';

import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component.jsx';
import Shop from './routes/shop/shop.component.jsx';
import CheckoutComponent from './routes/checkout/checkout.component.jsx';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      const pickedUser = user ? (({ accessToken, email }) => ({ accessToken, email }))(user) : 'logged-out';
      dispatch(setCurrentUser(pickedUser));
    })
    return unsubscribe;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='login' element={<Login />} />
        <Route path='checkout' element={<CheckoutComponent />} />
      </Route>
    </Routes>
  )
}

export default App
