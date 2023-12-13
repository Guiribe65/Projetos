import React from "react";
import Menu from "../menu/Menu";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <header>
        <Menu>Alvorada</Menu>
        <div class="login">Login</div>
        <div class="subtxt">Carnes & Massas</div>
      </header>
    </div>
  );
}

export default Header;