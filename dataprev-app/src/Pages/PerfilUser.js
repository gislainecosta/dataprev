import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import './pages.css';


import Trofeu from "../img/trofeu.svg";
import Avatar from "../img/user.png";
import Recicle from "../img/Recicle.svg"
import Message from '../img/message.svg';

const PerfilUser = () =>{
    return(
    <div id="tela-toda">
        
        <div id="profile"> 
        <div id="avatar_user">
                <img src={Avatar} alt={"Avatar"} id="avatar"></img>
            </div>
            <h1 id="profile_name"> Matheus dos Santos</h1>
            <h2 id="profile_email">math.info@gmail.com</h2>         
             <div id="board_gaming">
             <div>
                   <h2 id="categorize-1">Ranking</h2>
                   <h1 id="ranked_position">#2456</h1>
               </div>
                 <img src={Trofeu} alt={"Trofeu"} id="icon-trofeu"/> 
               <div>
                   <h2 id="categorize-2">Pontos</h2>
                   <h1 id="pontos_position">340</h1>
                </div>       
            </div>          

            <div id="cource_status">
                <h1 id="cource_title">Quase lá</h1>
                <h1 id="cource_subtitle">Sua aprendizagem no mini-curso</h1>
                <div id="progress-bar"><div id="progress"></div></div>
                <button id="button_cource">ir para mini Curso</button>
            </div>

            <div id="options">
                <h1><img src={Recicle} alt={"Recicle"} id=""/>  Resgatar meus pontos  </h1>
                <h1><img src={Message} alt={"Message"} id=""/>  Enviar convite para meus amigos</h1>
                
            </div>
        </div>
    </div> 
        
    )
}

export default PerfilUser;