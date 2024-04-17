import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

const SuccessPage: React.FC = () => {
  const [pieces, setPieces] = useState<number>(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <div className='success'>
      <div className='success__wrapper'>
        <div className='success__message'>
          <h1 className='success__title'>Thank you! ✨</h1>
          <p>Your form submission has been received.</p>
          <Link to='/' className='success__back-to'>
            <span>&larr;</span> Back to home
          </Link>
        </div>
      </div>
      <Confetti gravity={0.3} numberOfPieces={pieces} />
    </div>
  );
};

export default SuccessPage;
