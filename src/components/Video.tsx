import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import VideoSection from './VideoSection';

const Video: React.FC = () => {
  const videoTitleRef = useRef<HTMLDivElement>(null);
  const isVideoTitleInView = useInView(videoTitleRef);

  return (
    <section id='video' className='video'>
      <div className='video__heading'>
        <motion.div
          className='video__section-title'
          ref={videoTitleRef}
          initial={{ y: -150, opacity: 0 }}
          animate={isVideoTitleInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <h2>
            lets get started <strong>your project</strong>
          </h2>
        </motion.div>
        <p>
          Embark on your product journey with confidence by teaming up with a
          proven ally. Together, we'll transform your vision into a tangible,
          impactful reality.
        </p>
      </div>

      <div className='video__content'>
        <div className='video__banner'>
          <VideoSection />
          <span>imagination creates reality</span>
        </div>
        <div className='video__popup-media' />
      </div>
    </section>
  );
};

export default Video;
