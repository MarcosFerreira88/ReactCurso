import React from "react";
import data from "../../data/data.json";

export default class characterDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      Actual: data.Characters[0],
    };
  }
  onChangeInput = (event) => {
    this.setState(() => {
      return {
        Actual: data.Characters.find(
          (element) => element.id == event.target.value
        ),
      };
    });
  };
  render() {
    return (
      <div >
        <select onChange={(event) => {this.onChangeInput(event);}}>
          {data.Characters.map((element) => (
          <option value={element.id}>
              {element.name + " " + element.heroname}
          </option>
          ))}
        </select>
        <br/>
        <div>
          <div>
            <img src={this.state.Actual.photo}></img>
          </div>
          <h3> Detalles del heroe</h3>
          <p> nombre: {this.state.Actual.name}</p>
          <p> nombre de heroe: {this.state.Actual.heroname}</p>
          <p> Edad: {this.state.Actual.age}</p>
          <p> Ciudad: {this.state.Actual.city}</p>         
        </div>
      </div>
    );
  }
}