import React, { useState }from 'react';
import './components.css';
import User from "../img/user.png"
import styled from "styled-components"
import IconBook from "../img/BookBranco.svg"


const Cursos = (props) => {
  const [mostraGuia1, setMostraGuia1] = useState(false)
  const [mostraGuia2, setMostraGuia2] = useState(true)

  const mudaTab1 = () =>{
    setMostraGuia1(true)
    setMostraGuia2(false) 
  }

  const mudaTab2 = () =>{
    setMostraGuia1(false)
    setMostraGuia2(true)
  }

  return (
    <div id="cabecalho-cursos">
      <section id="informacoes">
          <section id="conquistas">
              <img id="trofeu" src={IconBook} alt={"Troféu"}/>
              <h5 id="conquistas">APRENDIZAGEM</h5>
          </section>
          <section id="perfil">
              <img id="perfilImg" src={User} alt={"User"}/>
              <h5 id="name-user">Matheus dos Santos</h5>
          </section>
      </section>
    </div>
  );
}

export default Cursos;