import React, { useState }from 'react';
import {useHistory} from "react-router-dom"
import './components.css';

const Rodape = (props) => {
    
    const listaAtalhos = props.atalhos.map((atalho) => {
        return <article className='menu-rodape' key={atalho.name}>
        <img src={atalho.foto} alt="Atalho" />
        <p>{atalho.text}</p>
        </article>
    
    })

  return (
    <div id="rodape">
        {listaAtalhos}
    </div>
  );
}

export default Rodape;