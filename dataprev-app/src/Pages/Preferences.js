import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

import Search_icon from "../img/search.svg";
import info_icon from "../img/Info.svg";
import suport_icon from "../img/suporte.png";
import User_Icon from "../img/User.svg";
import Notification from "../img/clarity_notification-line.svg";
import Lock from "../img/lock.svg"

const Preferences = () =>{
    return(
    <div id="">
        <div id="preference-header">
            <h1 id="title-preference">Configurações</h1>
            <img src={Search_icon} id="icon_search"></img><input type="search" id="input_seach" placeholder="Pesquisar configurações"></input>
        </div>
        <div id="preference-list">
            <li><img src={User_Icon} id=""></img>Minha Conta</li>
            <li><img src={Notification} id=""></img> Notificações</li>
            <li><img src={Lock} id=""></img> Privacidade</li>
            <li><img src={User_Icon} id=""></img>Acessibilidade</li>
            <li><img src={suport_icon} id=""></img>  Preciso de Ajuda</li>
            <li><img src={info_icon} id=""></img> Sobre</li> 
        </div>
    </div> 

    )
}

export default Preferences;