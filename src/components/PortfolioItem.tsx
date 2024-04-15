import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Modal from './Modal';

interface PortfolioItemProps {
  url: string;
  title: string;
  items: any[]; // Adjust the type as needed
  id: number | string;
  projectName: string;
  category: string;
  className?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  url,
  title,
  items,
  id,
  projectName,
  className
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const close = () => setIsModalOpen(false);
  const open = () => setIsModalOpen(true);

  const handleClick = () => {
    isModalOpen ? close() : open();
  };

  const portfolioItemRef = useRef<HTMLLIElement>(null);
  const isPortfolioItemInView = useInView(portfolioItemRef, {
    once: true
  });

  return (
    <>
      <motion.li
        ref={portfolioItemRef}
        className={className}
        initial={{ opacity: 0 }}
        animate={isPortfolioItemInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: (id as number) * 0.2 }}
        key={id}
        id={id as string}
        onClick={handleClick}
      >
        <img src={url} alt='portfolio' className='portfolio-item__image' />
        <div className='portfolio-item__overlay'>
          <h4 className='portfolio-item__project-name'>{projectName}</h4>
          <p className='portfolio-item__title'>{title}</p>
        </div>
      </motion.li>

      <AnimatePresence initial={false} onExitComplete={() => null} mode='wait'>
        {isModalOpen && <Modal onClose={handleClick} items={items} />}
      </AnimatePresence>
    </>
  );
};

export default PortfolioItem;
