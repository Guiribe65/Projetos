import React,  { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoPersonCircleOutline, IoSearch} from "react-icons/io5";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import "./Header.css";

function Header() {

  const [mostrarCampoPesquisa, setMostrarCampoPesquisa] = useState(false);

  const toggleCampoPesquisa = () => {
    setMostrarCampoPesquisa(!mostrarCampoPesquisa);
  };

   const rolarParaPromocoes = () => {
    const Promocoes = document.getElementById("Promocoes");
    const alturaDoHeader = document.querySelector(".header").offsetHeight;

    if (Promocoes) {
      const posicaoTopo = Promocoes.offsetTop - alturaDoHeader;

      window.scrollTo({
        top: posicaoTopo,
        behavior: "smooth",
      });
    }
  };

    const rolarParaMassas = () => {
      const Massas = document.getElementById("Massas");
      const alturaDoHeader = document.querySelector(".header").offsetHeight;
      const espacoExtra = 40; 
    
      if (Massas) {
        const posicaoTopo = Massas.offsetTop - alturaDoHeader + espacoExtra;
    
        window.scrollTo({
          top: posicaoTopo,
          behavior: "smooth",
        });
      }
    };

    const rolarParaMarmitas = () => {
      const Marmitas = document.getElementById("Marmitas");
      const alturaDoHeader = document.querySelector(".header").offsetHeight;
      const espacoExtra = 40; 
    
      if (Marmitas) {
        const posicaoTopo = Marmitas.offsetTop - alturaDoHeader + espacoExtra;
    
        window.scrollTo({
          top: posicaoTopo,
          behavior: "smooth",
        });
      }
    };

  return (
    <div className="header">
      {mostrarCampoPesquisa ? (
        <IoMdClose className="close" onClick={toggleCampoPesquisa} />
      ) : (
        <IoSearch className="search" onClick={toggleCampoPesquisa} />
      )}
      <MdOutlineShoppingBasket className="shop" />
      <FaWhatsapp className="WA" />
      <IoPersonCircleOutline className="login"/>
      <h1 className="menu">Alvorada</h1>
      <div class="subtxt">Carnes & Massas</div>

      {mostrarCampoPesquisa && (
        <div className="pesquisa">
          <IoSearch className="icone-pesquisa" />
          <input type="text" placeholder="Pesquisar..." className="campo-pesquisa"/>
        </div>
      )}
       {/* -----------------------Menu---------------------------  */}
      <div class="mnu"> 
        <div class="promo" onClick={rolarParaPromocoes}>Promoções</div>
        <div class="massas" onClick={rolarParaMassas}>Massas</div>
        <div class="bebidas">Bebidas</div>
        <div class="sobremesas">Sobremesas</div>
        <div class="marmitas" onClick={rolarParaMarmitas}>Marmitas</div>
        <div class="msp">Monte seu Prato</div>
        <div class="contato">Contato</div>
      </div>
    </div>
  );
}

export default Header;