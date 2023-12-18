import React from "react";
import "./Body.css";
import MinhaImagem from './Imagens/Alvorada.jpg';

function Body() {
  return (
    <div class="corpo">
        <h2 class="TP">Promoções</h2>
        <div class="promo1">
          <img src={MinhaImagem} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Alvorad carnes e massas</div>
            <div class="descricao">Avnida aclimação jd aquarios saojose dos campos</div>
          </div>
        </div>
        <div class="promo2">
          <img src={MinhaImagem} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Alvorad carnes e massas</div>
            <div class="descricao">Avnida aclimação jd aquarios saojose dos campos</div>
          </div>
        </div>
        <div class="promo3">
          <img src={MinhaImagem} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Alvorad carnes e massas</div>
            <div class="descricao">Avnida aclimação jd aquarios saojose dos campos</div>
          </div>
        </div>
        <div class="promo4">
          <img src={MinhaImagem} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Alvorad carnes e massas</div>
            <div class="descricao">Avnida aclimação jd aquarios saojose dos campos</div>
          </div>
        </div>
        {/* -----------------------Massas---------------------------  */}
        <h2 class="TM">Massas</h2>
        <div class="massa1">
          <img src={MinhaImagem} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Raviole de mussarela</div>
            <div class="descricao">Raviole de mussarela de bufula com tomate seco</div>
          </div>
        </div>
    </div>

  );
}

export default Body;