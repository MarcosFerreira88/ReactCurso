import React from "react";
import {Link} from 'react-router-dom';
export default class Nav extends React.Component {
  // constructor(){
  //   super();
  // }

  render() {
    return (
  <nav class="navbar navbar-expand-lg navbar-light bg-warning ">
  <a class="navbar-brand" href="#">VIRUSCCOL</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" exact to="/" > ONE PUNCH </Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" exact to="/characterDetail" > CHARACTERDETAIL </Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" exact to="/about" > ACERCA </Link>
     </li>
     
    </ul>
  </div>
</nav>
     
    );
  }
}