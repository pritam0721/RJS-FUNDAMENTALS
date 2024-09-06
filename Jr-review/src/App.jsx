import { useEffect, useState } from 'react';
// import User from './components/User.jsx';
import pepole from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = pepole[index];

  const checkNumber = (number) => {
    if (number > pepole.length - 1) {
      return 0;
    }
    if (number < 0) {
      return pepole.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((currentState) => {
      const newState = currentState + 1;
      return checkNumber(newState);
    });
  };
  const prevPerson = () => {
    setIndex((currentState) => {
      const newState = currentState - 1;
      return checkNumber(newState);
    });
  };
  const randomPerson = () => {
    setIndex((currentState) => {
      let newState = Math.floor(Math.random() * pepole.length);
      if (currentState === newState) {
        newState = newState + 1;
      }
      return checkNumber(newState);
    });
  };
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button type='button' className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button type='button' className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type='button'
          className='btn btn-hipster'
          onClick={randomPerson}
        >
          suprise me
        </button>
      </article>
    </main>
  );
};
export default App;

{
  /* <button
              type='button'
              className='btn prev-btn'
              onClick={() => setIndex(index - 1)}
            >
              prev
            </button>
            <button
              type='button'
              className='btn next-btn'
              onClick={() => setIndex(index + 1)}
            >
              next
            </button>
            <button type='button' className='btn btn-block btn-hipster'>
              suprise me
            </button> */
}

// const nextPerson = () => {
//   if (index < pepole.length - 1) {
//     setIndex(index + 1);
//   } else {
//     setIndex(0);
//   }
// };
// const prevPerson = () => {
//   if (index > 0) {
//     setIndex(index - 1);
//   } else {
//     setIndex(pepole.length - 1);
//   }
// };
