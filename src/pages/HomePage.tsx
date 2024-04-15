import Hero from '@components/Hero';
import LatestWorks from '@components/LatestWorks';
import TimeIsNow from '@components/TimeIsNow';
import Video from '@components/Video';
import { useEffect } from 'react';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Home | andrija-micunovic-design';
    return () => {
      document.title = 'Default Title';
    };
  }, []);
  return (
    <main className='home-sections' data-scroll>
      <Hero />
      <Video />
      <LatestWorks />
      <TimeIsNow />
      {/* 
      <Testimonials /> */}
    </main>
  );
};

export default HomePage;
