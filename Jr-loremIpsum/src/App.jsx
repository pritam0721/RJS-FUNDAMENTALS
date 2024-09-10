import { useState } from 'react';
import text from './data';
import { nanoid } from 'nanoid';
const App = () => {
  const [value, setValue] = useState(1);
  const [texts, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(value);
    setText(text.slice(0, amount));
    setValue(1);
  };
  return (
    <section className='section-center'>
      <div className='title'>
        <h4>Tired of Boring Lorem Ipsum</h4>
      </div>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='text' className='label'>
          paragraphs
        </label>
        <input
          name='text'
          id='text'
          type='number'
          onChange={(e) => setValue(e.target.value)}
          min='1'
          step='1'
          max='8'
          value={value}
        ></input>
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <div className='lorem-text'>
        {texts.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </div>
    </section>
  );
};
export default App;
