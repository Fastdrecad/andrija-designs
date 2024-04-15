interface ThumbnailProps {
  url: string;
}

interface ThumbnailsProps {
  items: ThumbnailProps[];
  goToSlide: (slideIndex: number) => void;
  currentIndex: number;
}

const Thumbnails: React.FC<ThumbnailsProps> = ({
  items,
  goToSlide,
  currentIndex
}) => {
  return (
    <div className='thumbnails'>
      {items.map((item, slideIndex) => (
        <div
          className='thumbnails__item'
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
        >
          <img
            src={item.url}
            alt='portfolio thumbnail'
            className={`thumbnails__item-image  ${
              currentIndex === slideIndex
                ? 'thumbnails__item-image--active'
                : ''
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
