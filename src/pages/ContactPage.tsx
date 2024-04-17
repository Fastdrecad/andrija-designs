import { useEffect, useRef, useState, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import contactHeroImg from '/contact-hero.jpg';
import pageTransition from '@components/pageTransition';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | andrija-micunovic-design';
    return () => {
      document.title = 'Default Title';
    };
  }, []);
  const navigate = useNavigate();

  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef);
  const formContentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const isLineInView = useInView(lineRef);

  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const refContainer = useRef<HTMLInputElement>(null);

  useEffect(() => {
    refContainer.current?.focus();
  }, []);

  const handleSubmit = (
    e: React.KeyboardEvent<HTMLInputElement> | FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const messageInput = form.elements.namedItem('message') as HTMLInputElement;

    if (
      !nameInput.value.trim() ||
      !emailInput.value.trim() ||
      !messageInput.value.trim()
    ) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (messageInput.value.trim().length < 10) {
      setErrorMessage('Message should have at least 10 characters.');
      return;
    }

    emailjs
      .sendForm(
        'service_g788tme',
        'template_w7u6qtb',
        form,
        'Fj7G3Ji2yq_cho6WY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setErrorMessage('Failed to send email. Please try again later.');
        }
      );

    navigate('/success');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <section className='contact-page'>
      <div className='contact-page__header'>
        <div className='contact-page__header-logo-container' />

        <motion.div
          className='contact-page__form-container'
          ref={formContentRef}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1
          }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
          >
            <div className='contact-page__title-container'>
              <h2>Contact Me</h2>
              <p className='contact-page__form-subtitle'>
                Let&apos;s get this conversation started. <br /> Tell me more
                about your company and goals for your future business growth.
              </p>
            </div>
          </motion.div>
          <motion.form
            className='contact-page__form'
            onSubmit={handleSubmit}
            ref={formRef}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.75,
              duration: 0.5,
              ease: 'easeInOut'
            }}
          >
            <div className='contact-page__form-row'>
              <input
                type='text'
                className='contact-page__form-input'
                id='name'
                name='name'
                placeholder='Name'
                ref={refContainer}
                required
                onKeyDown={handleKeyPress}
              />
            </div>
            <div className='contact-page__form-row'>
              <input
                type='email'
                className='contact-page__form-input'
                id='email'
                name='email'
                placeholder='Email'
                required
                onKeyDown={handleKeyPress}
              />
            </div>
            <div className='contact-page__form-row'>
              <textarea
                className='contact-page__form-input contact-page__form-textarea'
                name='message'
                placeholder='Message'
                required
              />
            </div>

            {errorMessage && (
              <p className='contact-page__error-message'>{errorMessage}</p>
            )}

            <button className='contact-page__btn-send' type='submit'>
              Send
            </button>
          </motion.form>
        </motion.div>
      </div>

      <div className='contact-page__footer-wrapper'>
        <div className='contact-page__footer'>
          <div className='contact-page__image-container'>
            <div className='contact-page__background-image'>
              <img
                src={contactHeroImg}
                alt='chair mock up'
                className='contact-page__background-image-src'
              />
            </div>
            <motion.div
              ref={titleRef}
              className='contact-page__footer-front-title'
              initial={{ opacity: 0, filter: 'blur(60px)' }}
              animate={isTitleInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1 }}
            >
              <h2 className='contact-page__footer-front-text'>
                Furniture Design | CAD | 3D Rendering
              </h2>
              <div className='contact-page__red-line-wrap'>
                <span
                  className={`red-line ${isLineInView ? 'side-in' : ''} `}
                  ref={lineRef}
                ></span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactPageWithTransition = pageTransition(ContactPage);

export default ContactPageWithTransition;
