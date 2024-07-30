import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "04/12/12",
    },
    {
      name: "Go to college",
      dueDate: "12/12/12",
    },
    {
      name: "sleep 8hrs",
      dueDate: "12/12/12",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
