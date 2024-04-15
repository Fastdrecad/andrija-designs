import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setCurrentRoute } from '../redux/routeSlice';
import { portfolio } from '../data';
import { NavLink } from 'react-router-dom';
import PortfolioItem from './PortfolioItem';

interface LatestWorksProps {
  className?: string;
}

const LatestWorks: React.FC<LatestWorksProps> = () => {
  const latestWorksRef = useRef<HTMLUListElement>(null);
  const isLatestWorksInView = useInView(latestWorksRef, {
    margin: '-500px'
    // once: true
  });

  const dispatch = useDispatch();

  const handleNavLinkClick = (url: string) => {
    dispatch(setCurrentRoute(url));
  };

  return (
    <section className='latest-works' id='latest-works'>
      <h4 className='latest-works__title'>
        latest <span>works</span>
      </h4>
      <motion.ul
        className='latest-works__image-gallery'
        ref={latestWorksRef}
        initial='hidden'
        animate={isLatestWorksInView ? 'visible' : {}}
      >
        {portfolio.slice(0, 8).map((item, index) => (
          <PortfolioItem
            key={item.id}
            title={item.title}
            items={item.items}
            id={`${index}`}
            url={item.url}
            projectName={item.projectName}
            category={item.category}
            className='portfolio-item'
          />
        ))}
      </motion.ul>

      <div className='latest-works__view-more'>
        <NavLink
          to='/portfolio'
          className='latest-works__view-more--link'
          onClick={() => handleNavLinkClick('/portfolio')}
        >
          view more projects
        </NavLink>
      </div>
    </section>
  );
};

export default LatestWorks;
