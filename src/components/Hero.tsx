import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { GoChevronDown } from 'react-icons/go';

const Hero: React.FC = () => {
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const isHeroTitleInView = useInView(heroTitleRef);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const videoElement = document.getElementById('video');
    if (videoElement) {
      videoElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };

  return (
    <section className='hero' id='hero'>
      <div className='hero__container'>
        <div className='hero__controller'>
          <div className='hero__image-container'>
            <div className='hero__blob'>
              <img
                src='/designer.png'
                alt="designer's profile photo"
                loading='lazy'
              />
            </div>
          </div>

          <motion.div
            className='hero__text'
            ref={heroTitleRef}
            initial={{ x: 250, opacity: 0, filter: 'blur(20px)' }}
            animate={
              isHeroTitleInView ? { x: 0, opacity: 1, filter: 'blur(0px)' } : {}
            }
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div
              className={`hero__text-wrapper ${
                isHeroTitleInView ? 'side-in' : ''
              }`}
            >
              <h1 className='h1'>
                Andrija<span>Micunovic</span>
              </h1>
              <AnimatedText text='Furniture Designer | CAD Designer | 3D Artist' />
            </div>
          </motion.div>
        </div>
      </div>
      <div className='hero__scroll-to-web'>
        <a href='#video' onClick={scrollTo}>
          <div className='hero__scroll-to-web-text'>
            <p>Scroll to web site</p>
          </div>
          <div className='hero__scroll-to-web-arrow-wrapper'>
            <GoChevronDown className='hero__scroll-to-web-arrow' />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
