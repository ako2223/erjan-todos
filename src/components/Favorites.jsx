import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./TodoList.module.scss";
function Favorites() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const URL = "http://localhost:8000/todos/";

  useEffect(() => {
    axios.get(URL).then((response) => {
      setTodos(response.data);
    });
  }, []);

  const remFav = (id, fav) => {
    axios
      .patch(`${URL}${id}`, {
        fav: false,
      })
      .then(() => {
        setTodos(
          todos.map((todo) => (todo.id === id ? { ...todo, fav: false } : todo))
        );
      });
  };
  return (
    <div>
      <NavLink to="/todos">Go to todos</NavLink>
      {todos.map((todo) =>
        todo.fav === true ? (
          <div key={todo.id} className={style.task}>
            <div className={style.outputs}>
              <span className={style.title}>{todo.title}</span>{" "}
              <span className={style.text}>{todo.text}</span>
              <button onClick={() => remFav(todo.id)}>
                Remove from to favorites
              </button>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Favorites;
