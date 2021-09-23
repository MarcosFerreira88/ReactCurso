import React from "react";
import Card from "../characterCard/card/card";
import data from "../../data/data.json";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {data.Characters.map((element) => (
          <Card
            name={element.name + " " + element.heroname}
            url={element.photo}
          />
        ))}
      </div>
    );
  }
}