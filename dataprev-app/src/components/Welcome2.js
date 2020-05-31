import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import Investir from "../img/investir.svg"
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


const Welcome2 = () =>{
    return(

        <div className="tela-welcome" >
        <MuiThemeProvider theme={MyTheme}>
           
            <img className="investir" src={Investir} alt="Inverstir" />

            <h1>Aprenda a investir em você</h1>
            <p id="text-welcome">Aprenda como investir o seu dinheiro e fazer as 
            melhores escolhas com os melhores profissionais da área</p>

        </MuiThemeProvider>
    </div>
    )
}

export default Welcome2;