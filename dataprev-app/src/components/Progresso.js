import React, { useState, useEffect } from "react";
import './components.css'; 

import Logo from "../img/mission.svg"


const Progresso = () =>{ 
  return(
    
      <div id="tela-componente">

<div id="tasks">
      <div id="description">
        <div id="Logo">
          <img src={Logo} id="Logo"></img>
        </div>
        <h1 id="Task_Title">Criando Metas</h1>
        <h2 id="Task_Subtitle">Investir no mínimo R$ 50,00 por 3 meses</h2>
      </div>
      <div>
        <h1 id="Task_Treetitle">400 pontos</h1> 
      </div>
    <div>
      <div id="Meta_Progress"><div id="progress"></div></div>
      <div id="activite">2/3</div>
    </div>

      </div> 
      <div id="tasks">
      <div id="description">
        <div id="Logo">
          <img src={Logo} id="Logo"></img>
        </div>
        <h1 id="Task_Title-">Criando Metas</h1>
        <h2 id="Task_Subtitle-">Investir no mínimo R$ 50,00 por 3 meses</h2>
      </div>
      <div>
        <h1 id="Task_Treetitle">400 pontos</h1> 
      </div>
    <div>
      <div id="Meta_Progress"><div id="progress"></div></div>
      <div id="activite">2/3</div>
    </div>

      </div> 


       

      </div>

       



      
        
  )
}

export default Progresso;