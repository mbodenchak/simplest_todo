import { useState } from "react";

import InputArea from "./components/InputArea";
import ToDoItem from "./components/ToDoItem";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => index !== id);
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItems} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem key={index} id={index} text={item} onCheck={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
