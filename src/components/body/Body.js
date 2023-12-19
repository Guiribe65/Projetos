import React from "react";
import "./Body.css";
import Alvorada from './Imagens/Alvorada.jpg';

function Body() {
  return (
    <div class="corpo">
        <h2 class="TP" id="Promocoes">Promoções</h2>
        <div class="promo1">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Alvorad carnes e massas</div>
            <div class="descricao">Avenida aclimação jd aquarios sao jose dos campos</div>
            <div class="preco">A partir de $20,00</div>
          </div>
        </div>
        <div class="promo2">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Alvorad carnes e massas</div>
            <div class="descricao">Avnida aclimação jd aquarios saojose dos campos</div>
          </div>
        </div>
        <div class="promo3">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Alvorad carnes e massas</div>
            <div class="descricao">Avnida aclimação jd aquarios saojose dos campos</div>
          </div>
        </div>
        <div class="promo4">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Alvorad carnes e massas</div>
            <div class="descricao">Avnida aclimação jd aquarios saojose dos campos</div>
          </div>
        </div>
        {/* -----------------------Massas---------------------------  */}
        <h2 class="TM" id="Massas">Massas</h2>
        <div class="massa1">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Raviole de mussarela</div>
            <div class="descricao">Raviole de mussarela de bufula com tomate seco</div>
          </div>
        </div>
        <div class="massa2">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Raviole de mussarela</div>
            <div class="descricao">Raviole de mussarela de bufula com tomate seco</div>
          </div>
        </div>
        {/* -----------------------Marmitas---------------------------  */}
        <h2 class="TMTX" id="Marmitas">Marmitas</h2>
        <div class="marmitaM">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Marmitex Mini</div>
            <div class="descricao">...</div>
          </div>
        </div>
        <div class="marmitaN">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Marmitex Normal</div>
            <div class="descricao">...</div>
          </div>
        </div>
        <div class="marmitaE">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Marmitex Executiva</div>
            <div class="descricao">...</div>
          </div>
        </div>
        <div class="marmitaMist">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Marmitex Mistura</div>
            <div class="descricao">...</div>
          </div>
        </div>
    </div>
  );
}

export default Body;