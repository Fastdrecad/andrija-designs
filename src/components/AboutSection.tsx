import { useRef } from 'react';
import penImage from '/pen-image.png';
import { motion, useInView } from 'framer-motion';

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const isTextRefInView = useInView(textRef, {
    amount: 0.5,
    once: true
  });

  return (
    <div className='about-section'>
      <div className='about-section__container'>
        <div className='about-section__part'>
          <div className='about-section__content'>
            <div className='about-section__text'>
              <motion.h3
                ref={textRef}
                className={`about-section__title ${
                  isTextRefInView ? 'fade-in' : ''
                }`}
              >
                Andrija
                <strong
                  className={`red-line ${isTextRefInView ? 'fade-in' : ''}`}
                >
                  Micunovic
                </strong>
              </motion.h3>

              <motion.div
                className={`about-section__desc ${
                  isTextRefInView ? 'fade-in' : ''
                }`}
              >
                <p>
                  &quot;Creative, both technically qualified and artistically
                  gifted, excellent skill set, responsive, a strong sense of
                  design and expertise, very thorough attention to detail,
                  delivered outstanding designs.&quot; These are just some of
                  the feedback from my clients.
                </p>
                <br />
                <p>
                  I’m a Furniture & Product Designer and CAD professional with
                  expertise in the usage of top industry tools including 3ds
                  Max, V-ray, Corona, Marvelous Designer, Zbrush, Keyshot,
                  Photoshop, and Design Engineering Software such as Inventor,
                  SolidWorks, and AutoCAD.
                </p>
                <br />
                <p>
                  StreetForms, ergoCentric, Holdenart, Project Direct, Inside
                  Weather, Atlas, Aark London, Sovereign Furniture, Jaxon Home,
                  Chic Shack, and other well-known companies are just a few of
                  the ones I have worked with.
                </p>
                <br />
                <p>
                  My experience in product design spans the spectrum from
                  furniture and product design through product development, 3D
                  printing, and 3D visualizations.
                </p>
                <br />
                <p>
                  Depending on your requirements, I may offer you the following
                  services:
                </p>
                <br />
                <ul>
                  <li>Ideation/Concept Sketching</li>
                  <li>Conceptual Renderings</li>
                  <li>
                    3D computer-aided modeling (from hand-drawn sketches to a 3D
                    model)
                  </li>
                  <li>3D designing and 2D specs for manufacture</li>
                  <li>3D Printing</li>
                  <li>Patent drawings</li>
                  <li>
                    High-quality visualization and animation with
                    post-production
                  </li>
                </ul>
                <br />
                <p>
                  All of my services are created to deliver outstanding outcomes
                  and save my clients time and money. I complete tasks of any
                  complexity quickly and effectively.
                </p>

                <br />
                <p>
                  I&apos;m looking forward to hearing more about your company
                  and your goals for your future business growth.
                </p>
                <br />
                <p>Let’s start a conversation about your project.</p>
                <br />
                <p>Don’t hesitate to contact me.</p>
              </motion.div>
            </div>

            <div className='about-section__pen-image'>
              <img src={penImage} alt='drawing pencil' />
            </div>

            <div className='about-section__signature'>
              <span>Andrija</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
