import React, { useState, useEffect } from "react";
import './pages.css';
import { useHistory } from "react-router-dom";
import CabecalhoCursos from "../components/CabecalhoCursos"
import Extrato from "../components/Extrato"
import Investimentos from "../components/Investimentos"
import Rodape from "../components/Rodape"
import Aprendizagem from "../img/Book.svg"
import Conquistas from "../img/Conquista.png"
import IconHome from "../img/Home.svg"
import IconInvestir from "../img/Investir_Preto.svg"
import IconAjustes from "../img/Ajustes.svg"
import IconBook from "../img/Book.svg"

const Curso = (props) =>{ 
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
      <CabecalhoCursos />
      {abaMostrada}
      <Rodape atalhos={iconesRodape} />
    </div> 
  )
}

export default Curso;