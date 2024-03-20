import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import PostList from "./components/PostList/PostList";
import TodoList from "./components/TodoList";

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
      <TodoList />;
    </div>
  );
}

export default App;
