import React from "react";
import Card from "../characterCard/card/card";
import data from "../../data/data.json";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {data.Characters.map((element) => (
          <Card
          id={element.id}
            name={element.name}
            url={element.photo}
          />
        ))}
      </div>
    );
  }
}