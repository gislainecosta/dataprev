import React, { useState, useEffect } from "react";
import './components.css'; 
import Ingrid from "../img/ingrid.svg"
import Lucas from "../img/lucas.svg"
import Alessandra from "../img/alessandra.svg"
import Juliana from "../img/juliana.svg"
import Trofeu from "../img/Conquista.png"


const Extrato = () =>{ 
  const [amigos] = useState([{
      name: "Ingrid da Silva",
      numero: "#1120",
      pontos: 3000,
      foto: Ingrid
    },
    {
      name: "Lucas Ramos",
      numero: "#1672",
      pontos: 2500,
      foto: Lucas
    },
    {
      name: "Alessandra Antunes",
      numero: "#2041",
      pontos: 1450,
      foto: Alessandra
    },
    {
      name: "Juliana França",
      numero: "#1180",
      pontos: 330,
      foto: Juliana
    },
  ])

    const listaAmigos = amigos.map((amigo) => {
      return <div id="container-amigos">
      <article id='amigos' key={amigo.numero}>
        <img id="imagem-amigo" src={amigo.foto} alt="Atalho" />
        <h4 id="nome-amigo">{amigo.name}</h4>
        <h4 id="num-amigo">{amigo.numero}</h4>
        <h4 id="ponto-amigo">{amigo.pontos}</h4>
        <img id="trofeu-amigos" src={Trofeu} alt={"Troféu"}/>
        </article>
     </div>
  
  })
  return(
    <div id="tela-amigos">
      {listaAmigos}
    </div> 
  )
}

export default Extrato;