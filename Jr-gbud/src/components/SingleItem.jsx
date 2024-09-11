import { useState } from 'react';

const SingleItem = ({ item, removeItems, editItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className='single-item'>
      <input type='checkbox' onChange={() => editItem(item.id)} />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        type='button'
        className='btn btn-remove'
        onClick={() => removeItems(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
