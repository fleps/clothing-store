import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { logOutUser } from '../../utils/firebase/firebase.utils';

import Logo from "../../assets/crown.svg";
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className='navigation container'>
        <Link className='logo-container' to={'/'}>
          <img src={Logo} alt='' className=''/>
        </Link>
        <div className='nav-links-container'>
          {
            !currentUser ? (
              <Link className='nav-link' to={'/login'}>Login</Link>
            ) : (
              <span onClick={logOutUser} className='nav-link'>Logout</span>
            )
          }
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;