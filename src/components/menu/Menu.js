import React from "react";
import "./Menu.css";

function Menu(props) {
  return (
    <h1 className="menu">{props.children}</h1>
  );
}

export default Menu;