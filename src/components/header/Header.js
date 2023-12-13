import React from "react";
import Menu from "../menu/Menu";
// import Logo from "../Imagens/Alvorada.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <header>
        {/* <img src={Logo} alt="Alvorada Logo" />     */}
        <Menu>Alvorada</Menu>
        <div class="login">Login</div>
        <div class="subtxt">Carnes & Massas</div>
      </header>
    </div>
  );
}

export default Header;