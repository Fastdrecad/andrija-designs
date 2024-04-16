import AboutSection from '@components/AboutSection';
import HeroSection from '@components/HeroSection';
import { useEffect } from 'react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About | andrija-micunovic-design';
    return () => {
      document.title = 'Default Title';
    };
  }, []);

  return (
    <article className='about-page'>
      <HeroSection />
      <AboutSection />
    </article>
  );
};

export default AboutPage;
