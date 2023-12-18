import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoPersonCircleOutline, IoSearch} from "react-icons/io5";
import { MdOutlineShoppingBasket } from "react-icons/md";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <MdOutlineShoppingBasket className="shop" />
      <IoSearch className="search"/>
      <FaWhatsapp className="WA" />
      <IoPersonCircleOutline className="login"/>
      <h1 className="menu">Alvorada</h1>
      <div class="subtxt">Carnes & Massas</div>
       {/* -----------------------Menu---------------------------  */}
      <div class="mnu"> 
        <div class="promo">Promoções</div>
        <div class="massas">Massas</div>
        <div class="bebidas">Bebidas</div>
        <div class="sobremesas">Sobremesas</div>
        <div class="marmitas">Marmitas</div>
        <div class="msp">Monte seu Prato</div>
        <div class="contato">Contato</div>
      </div>
    </div>
  );
}

export default Header;