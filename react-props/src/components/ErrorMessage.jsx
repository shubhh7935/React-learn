const ErrorMessage = ({ items }) => {
  //let foodItems = ['Roti', 'Daal', 'Sabji', 'Doodh', 'Chawal'];
  return <>{items.length === 0 && <h3>No Food Items</h3>}</>;
};
export default ErrorMessage;
