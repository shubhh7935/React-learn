import Item from "./Item";
const FoodItems = ({ items }) => {
  //let foodItems = ['Roti', 'Daal', 'Sabji', 'Doodh', 'Chawal'];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
};
export default FoodItems;
