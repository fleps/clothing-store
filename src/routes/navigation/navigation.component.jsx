import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import CartIcon from './../../components/cart/cart-icon.component.jsx';
import Minicart from '../../components/cart/minicart.component.jsx';
import { logOutUser } from '../../utils/firebase/firebase.utils';
import Logo from "../../assets/crown.svg";
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log('nav')

  return (
    <>
      <div className='navigation container'>
        <Link className='logo-container' to={'/'}>
          <img src={Logo} alt='' className=''/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to={'/shop'}>Shop</Link>
          {
            !currentUser ? (
              <Link className='nav-link' to={'/login'}>Login</Link>
            ) : (
              <span onClick={logOutUser} className='nav-link'>Logout</span>
            )
          }
          <CartIcon />
        </div>
        <Minicart />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;