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

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItems} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem key={index} id={index} text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
