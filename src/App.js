import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo, toggleTodo } from "./redux/todo";

function App() {
  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [getTodo, setGetTodo] = useState();
  const [update, setUpdate] = useState();
  // const [sendTodo, setSendTodo] = useState({
  //   id: todo.length + 1,
  //   text: { getTodo },
  // });
  const sendTodo = { id: Date.now(), text: getTodo, isCompleted: false };
  return (
    <div className="App">
      {/* {console.log(todo[0].text)} */}
      <h1>Redux todo list</h1>
      {console.log(todo)}
      {todo.map((todo) => (
        <div className="flex" key={todo.id}>
          <p className={todo.isCompleted ? "completed" : ""}>{todo.text}</p>
          <div>
            <button onClick={() => dispatch(removeTodo(todo))}>Remove</button>
            <input
              onChange={(e) => setUpdate(e.target.value)}
              type="text"
              placeholder="update"
            />
            <button onClick={() => dispatch(updateTodo({ update, todo }))}>
              Update
            </button>
            <input onClick={() => dispatch(toggleTodo(todo))} type="checkbox" />
          </div>
        </div>
      ))}
      {console.log(todo)}
      <br />
      <input onChange={(e) => setGetTodo(e.target.value)} type="text" />
      {console.log(getTodo)}
      <button onClick={() => dispatch(addTodo(sendTodo))}>Add</button>
    </div>
  );
}

export default App;
