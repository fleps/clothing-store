import { Outlet, Link } from 'react-router-dom';

import Logo from "../../assets/crown.svg";
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <div className='navigation container'>
        <Link className='logo-container' to={'/'}>
          <img src={Logo} alt='' className=''/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to={'/login'}>Login</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;