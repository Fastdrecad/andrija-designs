import { useInView } from 'react-intersection-observer';
import penImage from '/pen-image.png';

const AboutSection: React.FC = () => {
  const { ref: ref1, inView: titleIsVisible } = useInView();

  return (
    <div className='about-section'>
      <div className='about-section__container'>
        <div className='about-section__part'>
          <div className='about-section__content'>
            <div className='about-section__text'>
              <h3
                ref={ref1}
                className={`about-section__title ${
                  titleIsVisible ? 'fade-in' : ''
                }`}
              >
                Andrija
                <strong className='bold-title'>Micunovic</strong>
              </h3>

              <div
                ref={ref1}
                className={`about-section__desc ${
                  titleIsVisible ? 'fade-in' : ''
                }`}
              >
                <p>
                  Welcome to the world of innovative design and exceptional
                  creativity. As a distinguished Furniture and Product Designer
                  & 3D Artist, I bring forth a legacy of unparalleled expertise
                  and a track record of delivering excellence. With a blend of
                  technical prowess and artistic finesse, I am committed to
                  transforming visions into tangible masterpieces that captivate
                  and inspire.
                </p>
                <br />
                <p>
                  <strong>Client Testimonials</strong>
                </p>
                <p>
                  Clients praise my blend of technical expertise and artistic
                  flair, emphasizing my responsiveness, attention to detail, and
                  ability to deliver outstanding designs.
                </p>

                <br />
                <p>
                  My journey is defined by the resounding accolades of clients
                  who have experienced the magic of my creations. Feedback from
                  platforms like Upwork and collaborations with world-renowned
                  companies bear testimony to qualities such as creativity,
                  technical acumen, responsiveness, and an unwavering commitment
                  to perfection.
                </p>
                <br />

                <p>
                  <strong>Portfolio Highlights</strong>
                </p>

                <p>
                  Having partnered with esteemed entities including StreetForms,
                  ergoCentric, Holdenart, Project Direct, and many others, my
                  portfolio boasts a diverse array of projects that showcase
                  versatility and ingenuity. Each collaboration is a testament
                  to my ability to exceed expectations and push the boundaries
                  of conventional design.
                </p>
                <br />

                <p>
                  <strong>Skills Mastery</strong>
                </p>

                <p>
                  Proficient in industry-leading software such as 3ds Max,
                  V-ray, Solidworks, Inventor and AutoCAD, I bring a mastery of
                  digital tools to every project.
                </p>
                <br />
                <p>
                  <strong>Services Offered</strong>
                </p>

                <p style={{ marginBottom: '5px' }}>
                  From ideation to production, I offer a comprehensive suite of
                  services tailored to bring your vision to life with precision
                  and creativity.
                </p>

                <p>
                  Depending on your requirements, I may offer you the following
                  services:
                </p>
                <br />
                <ul>
                  <li>
                    Ideation/Concept Sketching: From initial concepts to refined
                    sketches, I breathe life into ideas through meticulous
                    sketching.
                  </li>
                  <li>
                    Conceptual Renderings: Transforming concepts into vivid
                    visualizations that resonate with clients and stakeholders.
                  </li>
                  <li>
                    3D Computer-Aided Modeling: Harnessing the latest technology
                    to craft intricate 3D models that transcend imagination.
                  </li>
                  <li>
                    3D Designing and 2D Specs for Manufacture: Bridging the gap
                    between virtual design and real-world production with
                    meticulous attention to detail.
                  </li>
                  <li>
                    3D Printing: Embracing cutting-edge technology to bring
                    designs to life with precision and efficiency.
                  </li>
                  <li>
                    Patent Drawings: Crafting precise patent drawings that
                    safeguard intellectual property and innovation.
                  </li>
                  <li>
                    High-Quality Visualization and Animation with
                    Post-Production: Elevating presentations and marketing
                    materials with captivating visuals and immersive animations.
                  </li>
                </ul>
                <br />
                <p>
                  Join the revolution of innovation and creativity. Whether
                  you're a visionary entrepreneur, a seasoned industry
                  professional, or a forward-thinking brand, let's collaborate
                  to transform your ideas into reality. Don't wait any longer –
                  contact me now, and together, let's craft something truly
                  extraordinary.
                </p>

                <br />
                <p>
                  I&apos;m looking forward to hearing more about your company
                  and your goals for your future business growth.
                </p>
                <br />
                <p>
                  Let's not just imagine the extraordinary – let's create it
                  together. Reach out today and let's make your vision a
                  reality.
                </p>
                <br />
              </div>
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
