import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div id='moon'>
        <div className='layer layer-1'></div>
        <div className='layer layer-2'></div>
        <div className='layer layer-3'></div>
        <div className='layer layer-4'></div>
        <div className='layer layer-5'></div>
        <div className='layer layer-6'></div>
      </div>
      <div className='not-found-text'>
        <h1>
          <strong>404</strong> <br /> You didn&apos;t break the internet, but we
          can&apos;t find what you are looking for.
        </h1>
        <div className='button-wrapper'>
          <Link to='/'>Back home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
