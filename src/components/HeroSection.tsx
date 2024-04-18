import aboutHero from '/about-hero.jpg';
import myImage from '/about-am.png';

const HeroSection: React.FC = () => {
  return (
    <div className='hero-section'>
      <div className='hero-section__profile-image'>
        <div className='hero-section__profile-image-inner'>
          <img src={myImage} alt='Andrija designer' loading='lazy' />
        </div>
      </div>
      <div className='hero-section__content'>
        <div className='hero-section__background'>
          <img
            src={aboutHero}
            alt='furniture drafting'
            className='hero-section__background-image'
            loading='lazy'
          />
        </div>
        <div className='hero-section__triangle'></div>
      </div>
    </div>
  );
};

export default HeroSection;
