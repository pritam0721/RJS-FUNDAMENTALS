const Navbar = ({ navbervalues, handleClick }) => {
  return (
    <div className='btn-container'>
      {navbervalues.map((item, index) => {
        return (
          <button
            key={index}
            type='button'
            className='btn'
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Navbar;
