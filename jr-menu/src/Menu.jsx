import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className='section-center' style={{ marginTop: '.6rem' }}>
      {items.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default Menu;
