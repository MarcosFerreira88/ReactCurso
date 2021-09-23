import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <h3>Character</h3>
        <div>
          <img src={this.props.url}></img>
        </div>
        <div>{this.props.name}</div>
      </div>
    );
  }
}
