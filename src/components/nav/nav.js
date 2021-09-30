import React from "react";
import {NavLink} from 'react-router-dom';
export default class Nav extends React.Component {
  // constructor(){
  //   super();
  // }

  render() {
    return (
      <nav>
            
            <p> <NavLink exact to="/" activeClassName="activo"> ONE PUNCH </NavLink></p>
            <p> <NavLink exact to="/characterDetail" activeClassName="activo"> CHARACTERDETAIL </NavLink></p>
            <p> <NavLink exact to="/about" activeClassName="activo" > ACERCA </NavLink></p>            

      </nav>
    );
  }
}