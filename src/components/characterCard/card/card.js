import React from "react";
import {NavLink} from 'react-router-dom';

const Card =(props)=> {

    return (
      <div >
        <h3>Character</h3>
        <div>
          <img src={props.url} width="300" alt="imagen"></img>
        </div>
        <p>
        <NavLink to={`/CharacterDetail1/${props.id}`}> {props.name}</NavLink>
        </p>           
            
        
        
      </div>
    );
  
}

export default Card;
