import SingleItem from './SingleItem';

const Items = ({ items, removeItems ,editItem}) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem key={item.id} item={item} removeItems={removeItems} editItem={editItem}/>
        );
      })}
    </div>
  );
};
export default Items;
