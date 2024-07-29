import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Roti", "Daal", "Sabji", "Doodh", "Chawal"];
  //let foodItems = [];
  return (
    <>
      <h1>Healthy Food Items</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
