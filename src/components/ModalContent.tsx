import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BsArrowsFullscreen,
  BsChevronLeft,
  BsChevronRight,
  BsXLg
} from 'react-icons/bs';
import Thumbnails from './Thumbnails';
import ModalCarousel from './ModalCarousel';

interface ModalContentProps {
  onClose: () => void;
  items: { url: string; desc: string }[];
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleCloseFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // The Keypress Event Handler
  const changeChild = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        // If supposed previous child is < 0 set it to last child
        setCurrentIndex((a) => (a - 1 < 0 ? items.length - 1 : a - 1));
      } else if (e.key === 'ArrowRight') {
        // If supposed next child is > length -1 set it to first child
        setCurrentIndex((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
      }
    },
    [items]
  );

  // Set and cleanup the event listener
  useEffect(() => {
    document.addEventListener('keydown', changeChild);

    return function cleanup() {
      document.removeEventListener('keydown', changeChild);
    };
  }, [changeChild]);

  return (
    <motion.div
      className='modal-content__fullscreen-wrapper'
      onClick={(e) => e.stopPropagation()}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0,
          duration: 1,
          delayChildren: 0.3,
          staggerChildren: 0.05
        }
      }}
      exit={{
        clipPath: 'inset(10% 50% 90% 50%)',
        scale: 0,
        opacity: 0,
        transition: {
          type: 'spring',
          bounce: 0,
          duration: 0.5
        }
      }}
    >
      <div className='modal-content__fullscreen-view'>
        <div className='modal-content__fullscreen-desktop-navbar-container'>
          <div className='modal-content__fullscreen-social'>
            <button
              className='modal-content__fullscreen-icon'
              onClick={handleFullscreen}
            >
              <BsArrowsFullscreen />
            </button>
          </div>

          <div className='modal-content__fullscreen-nav'>
            <button
              className='modal-content__fullscreen-close'
              onClick={handleCloseFullscreen}
            >
              <BsXLg />
            </button>
          </div>
        </div>

        <div className='modal-content__pro-gallery-desktop-expand'>
          <div className='modal-content__gallery-wrapper'>
            <div className='modal-content__pro-gallery-desktop-container'>
              {/* modal-content */}
              <div className='modal-content__modal-container'>
                <div className='modal-content__carousel-content'>
                  <div className='modal-content__arrow-left'>
                    <button
                      className='modal-content__prev'
                      onClick={handlePrev}
                    >
                      <BsChevronLeft />
                    </button>
                  </div>
                  <ModalCarousel items={items} currentIndex={currentIndex} />
                  <div className='modal-content__arrow-right'>
                    <button
                      className='modal-content__next'
                      onClick={handleNext}
                    >
                      <BsChevronRight />
                    </button>
                  </div>
                </div>
                <Thumbnails
                  items={items}
                  goToSlide={goToSlide}
                  currentIndex={currentIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalContent;
