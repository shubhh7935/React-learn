import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="item-container">
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </center>
    </>
  );
}

export default App
