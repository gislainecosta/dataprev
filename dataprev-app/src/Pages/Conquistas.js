import React, { useState, useEffect } from "react";
import './pages.css';
import { useHistory } from "react-router-dom";
import Tabs from "../components/Tabs"
import Invest from "../img/trofeu.svg"
import Amigos from "../components/Amigos"
import Progresso from "../components/Progresso"
import Rodape from "../components/Rodape"
import Aprendizagem from "@material-ui/icons/MenuBook"
import Conquistas from "../img/Conquista.png"
import IconHome from "../img/Home.svg"
import IconInvestir from "../img/Investir_Preto.svg"
import IconAjustes from "../img/Ajustes.svg"


const Conta = (props) =>{ 
  const [textoTab1] = useState("PROGRESSO")
  const [textoTab2] = useState("AMIGOS")
  const [telaMostrada, setTelaMostrada] = useState("amigos")
  const [iconesRodape] = useState([{
      name: "icone1",
      text: "Aprendizagem",
      foto: Aprendizagem,
      url: ""
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

  const mudaTelaParaAmigos = () =>{
    setTelaMostrada("amigos")
  }

  const mudaTelaParaProgresso = () =>{
    setTelaMostrada("progresso")

  }

  let abaMostrada
  switch (telaMostrada) {
    case "amigos":
      abaMostrada = (<Amigos />)
      break;
    default:
    abaMostrada = (<Progresso />)
      break;
  }

  return(
    <div id="tela-toda">
      <Tabs mudaTela2={mudaTelaParaAmigos} mudaTela1={mudaTelaParaProgresso} icone={Invest} tab1={textoTab1} tab2={textoTab2} />
      {abaMostrada}
      <Rodape atalhos={iconesRodape} />

    </div>
  )

}

export default Conta;