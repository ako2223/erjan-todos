import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Home.module.scss";

function Home() {
  return (
    <div>
      <h1>Hello !</h1>
      <div className={style.go_link}>
        <NavLink to="todos">Let's go</NavLink>
      </div>
    </div>
  );
}

export default Home;
