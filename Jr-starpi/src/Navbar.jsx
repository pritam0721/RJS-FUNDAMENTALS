import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import NavBLinks from './NavBLinks';

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>Strapi</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavBLinks />
      </div>
    </nav>
  );
};
export default Navbar;
