import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { designProcess } from '../data';

interface DesignProcessItem {
  id: number;
  number: string;
  process: string;
  img: string;
  desc: string;
  color: string;
}

const DesignProcessPage: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isTitleInView = useInView(titleRef);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    document.title = 'Design Process | andrija-micunovic-design';
    return () => {
      document.title = 'Default Title';
    };
  }, []);

  useEffect(() => {
    const parallax = document.getElementById('parallax');
    window.addEventListener('scroll', handleScroll);
    if (parallax) {
      parallax.style.backgroundPositionY = `${offsetY * 0.5}px`;
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetY]);

  return (
    <section className='design-process'>
      <div className='design-process__container'>
        <div className='design-process__heading'>
          <div className='design-process__section-title'>
            <motion.h3
              ref={titleRef}
              className='design-process__title'
              initial={{ scale: 0.751, opacity: 0, filter: 'blur(150px)' }}
              animate={
                isTitleInView
                  ? { scale: 1, opacity: 1, filter: 'blur(0px)' }
                  : {}
              }
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              You have a vision.
              <strong> I know the way to get you there</strong>
            </motion.h3>
            <h4 className='design-process__sub-title'>
              DESIGN
              <strong className='design-process__sub-title--highlight'>
                PROCESS
              </strong>
            </h4>
          </div>
        </div>
      </div>

      <div className='design-process-part' id='parallax'>
        <div className='design-process-content'>
          <div className='design-process-part-inner'>
            {designProcess.map((item, i) => (
              <DesignProcessBox key={i} index={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface DesignProcessBoxProps {
  index: number;
  item: DesignProcessItem;
}

const DesignProcessBox: React.FC<DesignProcessBoxProps> = ({ index, item }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleVisible = useInView(titleRef);

  return (
    <div className='design-process-box' id={`${index + 1}`}>
      <div className='process-num'>
        <span className='num' style={{ color: `${item.color}` }}>
          {item.number}
        </span>
        <h4>{item.process}</h4>
      </div>
      <DesignProcessImage
        ref={titleRef}
        item={item}
        isVisible={isTitleVisible}
      />
      <div className='process-desc'>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

interface DesignProcessImageProps {
  item: DesignProcessItem;
  isVisible: boolean;
}

const DesignProcessImage = React.forwardRef<
  HTMLDivElement,
  DesignProcessImageProps
>(({ item }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleVisible = useInView(titleRef);

  return (
    <motion.div
      ref={titleRef}
      className={`design-process-img ${isTitleVisible ? 'animate-arrow' : ''}`}
    >
      <div className='design-process-image-container'>
        <img src={item.img} alt='work' />
      </div>
    </motion.div>
  );
});

export default DesignProcessPage;
