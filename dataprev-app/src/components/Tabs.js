import React, { useState }from 'react';
import './components.css';
import User from "../img/user.png"
import styled from "styled-components"

const TextoTab = styled.p`
  color: ${
    props => props.isMostra ? '#1F6131' : '#FFFFFF'};
  width: 50%;
  font-weight: 500;
  border-bottom: ${
    props => props.isMostra ? 'solid 2px #1F6131' : 'solid 0px #000000'};
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  padding-bottom: 2%;
  margin-top: 12px;
`

const Tabs = (props) => {
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
    <div id="cabecalho">
      <section id="informacoes">
          <section id="conquistas">
              <img id="trofeu" src={props.icone} alt={"Troféu"}/>
              <h5 id="conquistas">CONQUISTAS</h5>
          </section>
          <section id="perfil">
              <img id="perfilImg" src={User} alt={"User"}/>
              <h5 id="name-user">Matheus dos Santos</h5>
          </section>
      </section>
      <section id="texto-tab">
        <TextoTab onClick={() =>{mudaTab1(); props.mudaTela1()}} isMostra={mostraGuia1}>
          {props.tab1}
        </TextoTab>
        <TextoTab 
          onClick={() =>{mudaTab2(); props.mudaTela2()}}
          isMostra={mostraGuia2}>
          {props.tab2}
        </TextoTab>
      </section>
    </div>
  );
}

export default Tabs;