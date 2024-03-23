import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import PostList from "./components/PostList/PostList";
import TodoList from "./components/TodoList";
import TextField from "./components/TextField";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { NavLink } from "react-router-dom";
import Favorites from "./components/Favorites";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=20"
    );
    const data = await responce.data;
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
