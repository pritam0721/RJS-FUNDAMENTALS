import { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTours }) => {
  const [isInfo, setInfo] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {isInfo ? info : <ShortInfo info={info} />}

          <button
            type='button'
            className='info-btn'
            onClick={() => setInfo(!isInfo)}
          >
            {isInfo ? (
              <div style={{ marginLeft: '.5rem' }}>show less</div>
            ) : (
              'read more...'
            )}
          </button>
        </p>
      </div>

      <button
        type='button'
        className='btn btn-block delete-btn'
        onClick={() => removeTours(id)}
      >
        not intersted
      </button>
    </article>
  );
};

const ShortInfo = ({ info }) => {
  const firstThreeLines = info.substr(0, 200);

  return <>{firstThreeLines}</>;
};
export default Tour;
