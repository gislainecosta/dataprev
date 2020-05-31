import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";


const PerfilUser = () =>{
    return(
        
    <div id="tela-toda">
       <h1 id="profile_name"> Nome</h1>
       <h2 id="profile_email">Email</h2>

        <div id="board_gaming">
          <div>
              <h1>Ranking</h1>
              <h2>#2456</h2>
          </div>
            <h1>Icone Trofeu</h1>
          <div>
              <h1>Pontos</h1>
              <h2>340</h2>
          </div>

        </div>


        <div id="cource_status">
            <h1 id="cource_title">Quase lá</h1>
            <h1 id="cource_title">Quase lá</h1>
        </div>
    </div>
        
    )
}

export default PerfilUser;