import css from "./Item.module.css";
const Item = (props) => {
  return (
    <li className={`${css["ss-item"]} list-group-item`}>
      <span className={`${css["ss-span"]}`}>{props.foodItem}</span>
    </li>
  );
};
export default Item;

/*
~> destructuring props for ease of use

const Item = ({foodItem}) => {
    return <li className="list-group-item">{foodItem}</li>
}
export default Item;
*/
