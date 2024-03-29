import Nav from "./components/nav/nav"
import Home from "./components/home/home";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Detail from "./components/characterDetail/characterDetail";
import Detail1 from "./components/characterDetail/characterDetail1";
import Formulario from './components/formulario/formulario'
import './App.css'

import About from "./components/footer/about";
import { useEffect } from "react";

export default function App() {

  useEffect( ()=> {
    console.log("El componente app se monto")
},[])


  return (
    <div className="App">
 <Router>
    <Nav/>
          
    <Switch>

          <Route exact path="/">
                <Home />
          </Route>
          
          <Route path="/characterDetail">
            <Detail/>
          </Route>

          <Route path="/CharacterDetail1/:id">
          <Detail1/>
          </Route>

          <Route path="/about">
           <Formulario/>
          </Route>
          
          <Route>
              <h1> ERROR 404 NOT FOUND </h1>
          </Route>

    </Switch>
    <About/>
    </Router>
    </div>
  );
}



