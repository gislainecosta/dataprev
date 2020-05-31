import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

import Search_icon from "../img/search.svg"

const Preferences = () =>{
    return(
    <div id="">
        <div id="preference-header">
            <h1 id="title-preference">Configurações</h1>
            <img src={Search_icon} id="icon_search"></img><input type="search" id="input_seach" placeholder="Pesquisar configurações"></input>
        </div>
        <div id="preference-list">
            <li>[ICONE] Minha Conta</li>
            <li>[ICONE] Notificações</li>
            <li>[ICONE] Privacidade</li>
            <li>[ICONE] Acessibilidade</li>
            <li>[ICONE] Preciso de Ajuda</li>
            <li>[ICONE] Sobre</li> 
        </div>
    </div> 

    )
}

export default Preferences;