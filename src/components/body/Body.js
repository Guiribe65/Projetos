import React, { useState, useEffect  } from "react";
import "./Body.css";
import Alvorada from './Imagens/Alvorada.jpg';

function Body() {
   // Estado para controlar a visibilidade da nova div
   const [selecaoMassa1, setSelecaoMassa1] = useState(false);
   const [selecaoMassa2, setSelecaoMassa2] = useState(false);
   const [overlayVisivel, setOverlayVisivel] = useState(false);

   // Efeito para adicionar/remover a classe ao body
  useEffect(() => {
    if (overlayVisivel) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  }, [overlayVisivel]);


   // Função para manipular o clique e mostrar a nova div
   const Massa1 = () => {
     setSelecaoMassa1(!selecaoMassa1);
     setSelecaoMassa2(false);
     setOverlayVisivel(true);
   };

   const Massa2 = () => {
    setSelecaoMassa2(!selecaoMassa2);
    setSelecaoMassa1(false);
    setOverlayVisivel(true);
  };

  // Função para fechar a nova div e o overlay
  const fecharDiv = () => {
    setSelecaoMassa1(false);
    setSelecaoMassa2(false);
    setOverlayVisivel(false);
  };

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
        <div class="massa1"  onClick={Massa1}>
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Raviole de mussarela</div>
            <div class="descricao">Raviole de mussarela de bufula com tomate seco</div>
          </div>
        </div>
        {selecaoMassa1 && <div className={`selmassa ${selecaoMassa1 ? 'aparecer' : ''}`}>
        Nova Div1
        </div>}
        <div class="massa2" onClick={Massa2}>
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Raviole de mussarela</div>
            <div class="descricao">Raviole de mussarela de bufula com tomate seco</div>
          </div>
        </div>
        {selecaoMassa2 && <div class="selmassa">Nova Div2</div>}
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
        {/* -----------------------MSP---------------------------  */}
        <h2 class="TMSP" id="msp">Monte seu Prato</h2>
        <div class="msp1">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Monte seu Talharim</div>
            <div class="descricao">200g de Talharim +1 Molho.</div>
          </div>
        </div>
        <div class="msp2">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Monte seu Raviole</div>
            <div class="descricao">200g de Raviole recheado a sua escolha +1 Molho.</div> 
          </div>
        </div>
         {/* -----------------------Sobremesas---------------------------  */}
        <h2 class="TS" id="sobremesa">Sobremesas</h2>
        <div class="sobremesa1">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Pudim</div>
            <div class="descricao">pudim de leite condensado.</div>
          </div>
        </div>
        <div class="sobremesa2">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Torta Holandesa</div>
            <div class="descricao">Torta holandesa direto da Holanda.</div>
          </div>
        </div>
         {/* -----------------------Bebidas---------------------------  */}
        <h2 class="TB" id="bebidas">Bebidas</h2>
        <div class="bebida1">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Refrigerante Lata</div>
            <div class="descricao">Coca-Cola, Fanta Guarana, Sprite e outros</div>
            <div class="preco">A partir de $5,00</div>
          </div>
        </div>
        <div class="bebida2">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Refrigerante 2L</div>
            <div class="descricao">Coca-Cola, Fanta Guarana, Sprite e outros</div>
            <div class="preco">A partir de $10,00</div>
          </div>
        </div>
        <div class="bebida3">
          <img src={Alvorada} alt="Descrição da imagem" />
          <div class="ptxt">
            <div class="titulo">Água Mineral</div>
            <div class="descricao">Água com gás ou sem gás</div>
            <div class="preco">A partir de $3,00</div>
          </div>
        </div>
        {overlayVisivel && <div className="overlay" onClick={fecharDiv}></div>}
    </div>
  );
}

export default Body;