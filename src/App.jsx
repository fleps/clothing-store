import { useEffect, lazy, Suspense, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { authChangedListener, createUserDocFromAuth } from './utils/firebase/firebase.utils.js';
import { setCurrentUser } from './store/user.reducer.js';
import SpinnerComponent from './components/spinner/spinner.component.jsx';

const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const Login = lazy(() => import('./routes/login/login.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));
const CartComponent = lazy(() => import('./routes/cart/cart.component'));

const App = () => {
  const location = useLocation();
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

  useLayoutEffect(() => {
    window.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <Suspense fallback={<SpinnerComponent />}>

      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='login' element={<Login />} />
          <Route path='cart' element={<CartComponent />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
