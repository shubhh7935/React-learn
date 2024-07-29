const Item = (props) => {
  return <li className="list-group-item ss-item">{props.foodItem}</li>;
};
export default Item;

/*
~> destructuring props for ease of use

const Item = ({foodItem}) => {
    return <li className="list-group-item">{foodItem}</li>
}
export default Item;
*/
