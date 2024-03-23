import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import style from "./TodoList.module.scss";

function TodoList() {
  //     value   function    hook  default
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [editMode, setEditMode] = useState(null);
  // const URL = "http://localhost:8000/todos/"
  const URL = "https://f65bb163746fd6f6.mokky.dev/todos/";

  useEffect(() => {
    axios.get(URL).then((response) => {
      setTodos(response.data);
    });
  }, []);

  const addTodo = () => {
    axios
      .post(URL, {
        text: inputValue,
        title: inputTitle,
      })
      .then((responce) => {
        setTodos([...todos, responce.data]);
        setInputValue("");
        setInputTitle("");
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`${URL}${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  };

  const editTodo = (id, newText) => {
    axios
      .patch(`${URL}${id}`, {
        text: newText,
      })
      .then(() => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
          )
        );
        setEditMode(null);
      });
  };

  const editTitle = (id, newTitle) => {
    axios
      .patch(`${URL}${id}`, {
        title: newTitle,
      })
      .then(() => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, title: newTitle } : todo
          )
        );
        setEditMode(null);
      });
  };

  return (
    <div className={style.all}>
      <div className={style.textarea}>
        <h1>Todo List</h1>
        <div className={style.inputs}>
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            className={style.title_input}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Details"
          ></textarea>

          <button onClick={addTodo}>Submit</button>
        </div>
      </div>
      <div className={style.todos}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editMode === todo.id ? (
              <>
                <div className={style.inputs}>
                  <input
                    type="text"
                    defaultValue={todo.title}
                    onBlur={(e) => editTitle(todo.id, e.target.value)}
                  />
                  <textarea
                    className={style.textarea}
                    type="text"
                    defaultValue={todo.text}
                    onBlur={(e) => editTodo(todo.id, e.target.value)}
                  ></textarea>
                </div>

                <button onClick={() => setEditMode(null)}>No edit</button>
              </>
            ) : (
              <>
                <div className={style.task}>
                  <div className={style.outputs}>
                    <span className={style.title}>{todo.title}</span>{" "}
                    <span className={style.text}>{todo.text}</span>
                  </div>
                  <div className={style.buttons}>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => setEditMode(todo.id)}>Edit</button>
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
