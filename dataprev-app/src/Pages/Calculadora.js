import React, { useState, useEffect } from "react";
import './calculadora.css';
import { useHistory } from "react-router-dom";
import Saldo from "../img/saldo.svg"
import './pages.css';
import Tabs from "../components/Tabs"
import Invest from "../img/invest.svg"
import Extrato from "../components/Extrato"
import Investimentos from "../components/Investimentos"
import Rodape from "../components/Rodape"
import Aprendizagem from "../img/Aprendizagem.svg"
import Conquistas from "../img/Conquista.png"
import IconHome from "../img/Home.svg"
import IconInvestir from "../img/Investir_Preto.svg"
import IconAjustes from "../img/Ajustes.svg"


const Calculadora = () => {
  const [values, setValues] = useState({
    idade: '',
   
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return(
    <div id="tela-toda">
    
      <div ClassName="saldo">
        <h1 className="saldo-invest">Saldo investido</h1>
        <h1 className="inv"><img src={Saldo}/> R$ 1.350,45</h1>
        <h3 className="saldo-atualizado">Saldo atualizado as 11:11:02 PM</h3>
      </div>
      <div className="box1">
        <p className="txt1">Solicitar auxílio de um especialista</p>
      </div>

      <div className="box2">
        <p className="txt2">Solicitar auxílio de um especialista</p>
      </div>
    
      <h1 className="head1">Simulador de Investimento </h1>
      <p className="txt3">Escolha uma das opções abaixo e preencha com as 
      informações necesárias para simularmos seu investimento</p>

      <input ClassName="foo" value={values.idade} onChange={handleChange("idade")} />
      <input  value={values.idade} onChange={handleChange("idade")} />
      <input  value={values.idade} onChange={handleChange("idade")} />
    </div> 
  )
}

export default Calculadora;