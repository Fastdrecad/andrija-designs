import Socials from './Socials';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__ellipses' />
      <div className='footer__container'>
        <Socials containerStyles='social-icons' iconStyles='icon-style' />
        <div className='footer__copyright'>
          <p>
            &copy; {new Date().getFullYear()}
            <span>
              {' '}
              Andrija Micunovic <br />
              All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
