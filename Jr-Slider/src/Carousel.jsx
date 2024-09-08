import { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { shortList, list, longList } from './data';
const Carousel = () => {
  const [pepole, setPepole] = useState(longList);
  const [currentPerson, setPerson] = useState(0);
  const prevSlide = () => {
    setPerson((oldPerson) => {
      const result = (oldPerson - 1 + pepole.length) % pepole.length;
      return result;
    });
  };
  const nextSlide = () => {
    setPerson((oldPerson) => {
      const result = (oldPerson + 1) % pepole.length;
      return result;
    });
  };
  useEffect(() => {
    const setId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(setId);
    };

  }, [currentPerson]);
  return (
    <section className='slider-container'>
      {pepole.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className='person-img'  />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon ' />
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
