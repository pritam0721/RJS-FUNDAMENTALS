import { useEffect, useState } from 'react';
import menu from './data';
import Title from './Title';
import Menus from './Menu';
import Navbar from './Navbar';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const handleClick = (item) => {
    if (item === 'all') {
      setMenuItems(menu);
    } else {
      const newCategory = menu.filter((singleItem) => {
        if (item === singleItem.category) {
          return singleItem;
        }
      }, []);
      setMenuItems(newCategory);
    }
  };
  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Navbar navbervalues={categories} handleClick={handleClick} />
        <Menus items={menuItems} />
      </section>
    </main>
  );
};
export default App;
