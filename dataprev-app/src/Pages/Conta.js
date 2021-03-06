import React, { useState, useEffect } from "react";
import './pages.css';
import { useHistory } from "react-router-dom";
import Tabs from "../components/Tabs"
import Invest from "../img/invest.svg"
import Extrato from "../components/Extrato"
import Investimentos from "../components/Investimentos"
import Rodape from "../components/Rodape"
import Aprendizagem from "../img/Book.svg"
import Conquistas from "../img/Conquista.png"
import IconHome from "../img/Home.svg"
import IconInvestir from "../img/Investir_Preto.svg"
import IconAjustes from "../img/Ajustes.svg"

const Conta = (props) =>{ 
  const [textoTab1] = useState("INVESTIMENTOS")
  const [textoTab2] = useState("EXTRATO")
  const [telaMostrada, setTelaMostrada] = useState("extrato")
  const [iconesRodape] = useState([
    {
      name: "icone1",
      text: "Aprendizagem",
      foto: Aprendizagem,
      url: "/Cursos"
    },
    {
      name: "icone2",
      text: "conquistas",
      foto: Conquistas,
      url: "/conquistas"
    },
    {
      name: "icone3",
      text: "Tela Inicial",
      foto: IconHome,
      url: "/perfil"
    },
    {
      name: "icone4",
      text: "Investimento",
      foto: IconInvestir,
      url: "/conta"
    },
    {
      name: "icone5",
      text: "Ajustes",
      foto: IconAjustes,
      url: "/preferencias"
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