import React from "react";
import {NavLink} from 'react-router-dom';

import './card.css'



const Card =(props)=> {

    return (

         
                  <div className="cartas">
                      <h3>Personajes</h3>
                      <div className="card" style={{maxWidth:"200px"}}>
                      <img src={props.url} width="300" height="250" alt="imagen"></img>
                      </div>
                    <div className="nombre">Nombre:  <NavLink to={`/CharacterDetail1/${props.id}`}> {props.name}</NavLink>
                      </div>         
                      
                  </div>         
           
           
    );
  
}

export default Card;
