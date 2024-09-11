import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [item, setItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error('please enter the item');
      return;
    } else {
      addItem(item);
      toast.success('item added to the list');
      setItem('');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className='form-control'>
          <input
            type='text'
            id='item'
            className='form-input'
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type='submit' className='btn'>
            Add item
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
