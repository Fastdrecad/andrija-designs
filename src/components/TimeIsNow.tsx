import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setCurrentRoute } from '../redux/routeSlice';

const TimeIsNow: React.FC = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const isButtonInView = useInView(buttonRef);

  const amLogoRef = useRef<HTMLImageElement>(null);
  const isAmLogoInView = useInView(amLogoRef);

  const dispatch = useDispatch();

  const handleNavLinkClick = (url: string) => {
    dispatch(setCurrentRoute(url));
  };

  return (
    <section className='time-is-now' id='time-is-now'>
      <div className='time-is-now__ellipses' />
      <div className='time-is-now__content'>
        <h3>
          the time is now! <strong>you deserve the best</strong>
        </h3>
        <p>Do your first step and contact me.</p>
        <motion.div
          ref={buttonRef}
          initial={{ y: 250, opacity: 0 }}
          animate={isButtonInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.35 }}
        >
          <Link
            to='/contact'
            className='time-is-now__let-me-hear'
            onClick={() => handleNavLinkClick('/contact')}
          >
            let me hear your story
          </Link>
        </motion.div>
      </div>

      <div className='time-is-now__logo-container'>
        <motion.img
          src='/am-logo.svg'
          alt='designer logo'
          ref={amLogoRef}
          initial={{ scale: 0, opacity: 0, filter: 'blur(20px)', rotate: 360 }}
          animate={
            isAmLogoInView
              ? { scale: 1, opacity: 0.2, filter: 'blur(0px)', rotate: 0 }
              : {}
          }
          transition={{ duration: 0.5 }}
        />
      </div>
    </section>
  );
};

export default TimeIsNow;
