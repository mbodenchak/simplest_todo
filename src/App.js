import { useState } from "react";

import InputArea from "./components/InputArea";

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
    </div>
  );
}

export default App;
