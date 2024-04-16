import React, { useCallback, useEffect, useState } from 'react';
import { list, portfolio } from '../data';
import PortfolioItem from '@components/PortfolioItem';
import PortfolioList from '@components/PortfolioList';
import { AnimatePresence } from 'framer-motion';

interface PortfolioItem {
  id: number;
  title: string;
  projectName: string;
  url: string;
  category: string;
  items: { url: string; desc: string }[];
}

const imagesPerRow: number = 8;

const filterPortfolioByCategory = (category: string): PortfolioItem[] => {
  switch (category.toLowerCase()) {
    case 'rendering':
      return portfolio.filter((el) => el.category === '3D Rendering');
    case 'cad':
      return portfolio.filter((el) => el.category === 'CAD');
    case 'furniture':
      return portfolio.filter((el) => el.category === 'Furniture Design');
    case 'animation':
      return portfolio.filter((el) => el.category === '3D Animation');
    case 'product':
      return portfolio.filter((el) => el.category === 'Product Design');
    default:
      return portfolio;
  }
};

const PortfolioPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Portfolio | andrija-micunovic-design';
    return () => {
      document.title = 'Default Title';
    };
  }, []);

  const [data, setData] = useState<PortfolioItem[]>([]);
  const [selected, setSelected] = useState<string>('all');
  const [next, setNext] = useState<number>(imagesPerRow);

  const handleMoreImages = useCallback(() => {
    setNext((prevNext) => prevNext + imagesPerRow);
  }, []);

  useEffect(() => {
    setData(filterPortfolioByCategory(selected));
    setNext(imagesPerRow);
  }, [selected]);

  return (
    <main className='portfolio-page' id='portfolio'>
      <div className='portfolio-page__container'>
        <h4 className='portfolio-page__title'>portfolio</h4>
        <ul className='portfolio-page__tabs'>
          {list.map((item, i) => (
            <PortfolioList
              key={i}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
      </div>
      <div className='portfolio-page__gallery-container'>
        <AnimatePresence>
          <ul className='portfolio-page__image-gallery'>
            {data?.slice(0, next).map((el, i) => (
              <PortfolioItem
                key={el.id}
                title={el.title}
                items={el.items}
                id={`${i}`}
                className='portfolio-item'
                url={el.url}
                projectName={el.projectName}
                category={el.category}
              />
            ))}
          </ul>
        </AnimatePresence>
      </div>
      {next < (data?.length || 0) && (
        <button
          id='load-more'
          className='portfolio-page__load-more'
          onClick={handleMoreImages}
        >
          load more
        </button>
      )}
      <div style={{ marginBottom: '100px' }} />
    </main>
  );
};

export default PortfolioPage;
