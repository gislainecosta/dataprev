import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import Metas from "../img/metas.svg"
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

const Welcome1 = () =>{
    return(
    <div className="tela-welcome">
    <MuiThemeProvider theme={MyTheme}>
    <img className="metas" src={Metas} alt="Metas" />

    <h1>Atinja suas metas financeiras</h1> 
    <p>Das moedinhas do carro, do cofrinho, investindo 
        no que realmente importa: em você</p>

    </MuiThemeProvider>
</div>
     

    )
}

export default Welcome1;