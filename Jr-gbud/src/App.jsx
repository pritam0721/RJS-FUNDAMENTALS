import { useState } from 'react';
import { Form, Items } from './components';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App = () => {
  const defaultList = JSON.parse(localStorage.getItem('list') || []);

  const [items, setItems] = useState(defaultList);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };
  const removeItems = (itemId) => {
    const newItems = items.filter((item) => item.id != itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.info('item is deleted form the list');
  };
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);

  };
  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItems={removeItems} editItem={editItem}/>
      <ToastContainer position='top-center' />
    </section>
  );
};

export default App;

// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'));
//   } else {
//     list = [];
//   }
//   return list;
// };
