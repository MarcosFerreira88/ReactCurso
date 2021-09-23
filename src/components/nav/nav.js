import React from "react";
export default class Nav extends React.Component {

  render() {
    return (
      <header >
        <nav>
          
          <ul>
            <li>
              <a href="#">InfoSquad</a>
            </li>
            <li>
              <a href="#">Character Detail</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}