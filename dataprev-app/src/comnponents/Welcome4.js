import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import Todos from "../img/todos.svg";
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

const Welcome4 = () =>{
    return(
        <div className="tela">
        <MuiThemeProvider theme={MyTheme}>
            <img className="todos" src={Todos} alt="Todos" />
            <h1>Fomos feitos para todos</h1>
            <p>Contamos com recursos que nos permite ajudar o
             maximo de pessoas possiveis, trazendo
            acessibilidade até você</p>

        </MuiThemeProvider>
    </div>
    )
}

export default Welcome4;