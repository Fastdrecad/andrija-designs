import { useEffect, useRef, useState } from 'react';
import TestimonialItems from './TestimonialItems';
import { testimonials } from '../data';
import { useInView } from 'framer-motion';

const Testimonials: React.FC = () => {
  const lineRef = useRef<HTMLSpanElement>(null);
  const isLineInView = useInView(lineRef);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    const parallax = document.getElementById('parallax');
    window.addEventListener('scroll', handleScroll);
    if (parallax) {
      parallax.style.backgroundPositionY = `${offsetY * 0.5}px`;
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetY]);

  return (
    <section className='testimonials' id='testimonials'>
      <div className='testimonials__bg' id='parallax'>
        <h1>Testimonials</h1>
        <div className='testimonials__slider'>
          <TestimonialItems>
            {testimonials.map((item, i: number) => (
              <div className='container-items' key={i}>
                <div className='content-items'>
                  <em>
                    <p>{item.review}</p>
                  </em>
                  <div className='person'>
                    <h2>{item.name}</h2>
                    <h4>{item.position}</h4>
                  </div>
                </div>
              </div>
            ))}
          </TestimonialItems>
        </div>
      </div>
      <div className='testimonials__bottom-section'>
        <p>
          Let&rsquo;s work together to achieve your goals and elevate your
          business to new heights.
        </p>
        <div className='testimonials__red-line-wrap'>
          <span
            className={`red-line ${isLineInView ? 'side-in' : ''} `}
            ref={lineRef}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
