import React from "react";
import Card from "../characterCard/card/card";
import data from "../../data/data.json";
import './home.css'
export default class Home extends React.Component {
  render() {
    return (

      <center>
      <div className="home">
        {data.Characters.map((element) => (
          
          <Card
            id={element.id}
            name={element.name}
            url={element.photo}
            ciudad={element.city}
            heroe={element.heroname}
          />
          
           
        ))}
     
      </div>
      </center>
    );
  }
}