import React, { useState }from 'react';
import {useHistory} from "react-router-dom"
import './components.css';

const Rodape = (props) => {
    let history = useHistory()

    const goToPage = () =>{
      
    }
    const listaAtalhos = props.atalhos.map((atalho) => {
        return <article onClick={() =>{history.push(`${atalho.url}`)}} className='menu-rodape' key={atalho.name}>
        <img src={atalho.foto} alt="Atalho" />
        </article>
    
    })

  return (
    <div id="rodape">
        {listaAtalhos}
    </div>
  );
}

export default Rodape;