import React, { useState, useEffect } from "react";
import './pages.css';
import { useHistory } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import Tabs from "../components/Tabs"
import Invest from "../img/invest.svg"
import Extrato from "../components/Extrato"
import Investimentos from "../components/Investimentos"
import styled from "styled-components"
import Rodape from "../components/Rodape"
import Aprendizagem from "../img/Aprendizagem.svg"

const Conta = (props) =>{ 
  const [textoTab1] = useState("INVESTIMENTOS")
  const [textoTab2] = useState("EXTRATO")
  const [telaMostrada, setTelaMostrada] = useState("extrato")
  const [iconesRodape] = useState([
    {
      name: "icone1",
      text: "Aprendizagem",
      foto: Aprendizagem
    },
    {
      name: "icone2",
      text: "conquistas"
    },
    {
      name: "icone3",
      text: "Tela Inicial"
    },
  ])



  const mudaTelaParaExtrato = () =>{
    setTelaMostrada("extrato")
  }

  const mudaTelaParaInvestimento = () =>{
    setTelaMostrada("invest")

  }

  let abaMostrada
  switch (telaMostrada) {
    case "extrato":
      abaMostrada = (<Extrato />)
      break;
    default:
    abaMostrada = (<Investimentos />)
      break;
  }

  return(
    <div id="tela-toda">
      <Tabs mudaTela2={mudaTelaParaExtrato} mudaTela1={mudaTelaParaInvestimento} icone={Invest} tab1={textoTab1} tab2={textoTab2} />
      {abaMostrada}
      <Rodape atalhos={iconesRodape} />
    </div> 
  )
}

export default Conta;