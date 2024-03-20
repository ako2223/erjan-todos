import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function TodoList() {
  //     value      fucntion      hook    default
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(()=> {

  },[])

  const addTodo = () => {
    axios.post("http://localhost:8000/todos", { text: inputValue });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Submit</button>
      </div>
      <ul>
        <li>
          <span>Todo 1</span>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
