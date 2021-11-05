import React, { useState } from "react";
import "./App.css";

function App() {
  const [addTodo, setAddTodo] = useState();
  const [edit, setEdit] = useState();
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Learn React",
    },
    {
      id: 2,
      text: "Learn Redux",
    },
    {
      id: 3,
      text: "Learn React Native",
    },
  ]);
  const subHandler = () => {
    setTodo([...todo, { id: todo.length + 1, text: addTodo }]);
    setAddTodo("");
  };
  const deleteHandler = (item) => {
    setTodo(todo.filter((t) => t.id !== item));
    console.log(item);
  };
  const editHandler = (itemId) => {
    todo.map((i) => (i.id === itemId ? `${(i.text = edit)}` : i.text));
    console.log(edit);
    setTodo([...todo]);
    setEdit("");
  };
  return (
    <div className="App">
      <h1>Making a counter app using useState</h1>
      {todo.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <input onChange={(e) => setEdit(e.target.value)} type="text" />
          <button onClick={() => editHandler(item.id)}>Edit</button>
          <button onClick={() => deleteHandler(item.id)}>Delete</button>
        </div> //key is used to identify the element
      ))}
      <br />
      <input
        value={addTodo}
        onChange={(e) => setAddTodo(e.target.value)}
        type="text"
      />
      <button onClick={subHandler}>Add</button>
    </div>
  );
}

export default App;
