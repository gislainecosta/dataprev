import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import Potencial from "../img/potencial.svg";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'


const MyTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#1EAC1D",
            dark: "#16340c",
            contrastText: "#ffffff"
        },
    }
})



const Welcome3 = () =>{
    return(
        <div className="tela-welcome">
        <MuiThemeProvider theme={MyTheme}>
          
            <img className="potencial" src={Potencial} alt="Potencial" />

            <h1>Acreditamos no seu  potencial</h1>
            <p>Ao final do seu aprendizado temos certeza que você estará controle 
            de sua vida financeira e lhe concederemos o investimento de R$500,00
             para sua Previdência Complementar</p>

        </MuiThemeProvider>
    </div>
    )
}

export default Welcome3;