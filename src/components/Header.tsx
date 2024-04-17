import { useContext } from 'react';
import { MenuContext } from '../context/navContext';
import { Link } from 'react-router-dom';
import { setCurrentRoute } from '../redux/routeSlice';
import { useDispatch } from 'react-redux';
import ToggleSwitch from './ToggleSwitch';
import Navigation from './Navigation';
import MainLogo from './MainLogo';

const Header: React.FC = () => {
  const { toggle, isChecked } = useContext(MenuContext);
  const dispatch = useDispatch();

  const handleNavLinkClick = (url: string) => {
    dispatch(setCurrentRoute(url));
  };

  return (
    <header className='header'>
      <div className='header__desktop-fixed'>
        <div className='header__switch'>
          <ToggleSwitch />
        </div>
        <div className='header__link-name'>
          <Link to='/' onClick={() => handleNavLinkClick('/')}>
            <h2 className='header__link-name-main'>
              Andrija<span>Micunovic</span>
            </h2>
          </Link>
        </div>
        <h1 className='header__subtitle'>Furniture Design | CAD | Rendering</h1>
        <Navigation />
      </div>
      <div className='header__main'>
        <div className='header__container'>
          <MainLogo />
          <div className='header__nav-content'>
            <Navigation />
            <ToggleSwitch />
          </div>
          <label className='header__hamburger-menu'>
            <input
              type='checkbox'
              checked={isChecked}
              readOnly
              onClick={() => {
                toggle();
              }}
            />
          </label>
          <div className='header__ellipses' />
        </div>
      </div>
    </header>
  );
};

export default Header;
