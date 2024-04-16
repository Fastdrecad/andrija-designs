import aboutHero from '/about-hero.jpg';
import myImage from '/about-am.png';

const HeroSection: React.FC = () => {
  return (
    <div className='hero-section'>
      <div className='hero-section__profile-image'>
        <div className='hero-section__profile-image-inner'>
          <img src={myImage} alt='Andrija designer' />
        </div>
      </div>
      <div className='hero-section__content'>
        <div className='hero-section__background'>
          <img
            src={aboutHero}
            alt='furniture drafting'
            className='hero-section__background-image'
          />
        </div>
        <div className='hero-section__triangle'></div>
      </div>
    </div>
  );
};

export default HeroSection;
