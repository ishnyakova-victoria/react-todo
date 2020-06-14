import React from 'react';
import './Categories.css';
import { Todos } from "./Todos/Todos";

export class Categories extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="categories">
        <li className="category">Category 1
          <Todos />
        </li>
        <li className="category">Category 2</li>
        <li className="category">Category 3</li>
        <li className="category">Category 4</li>
        <li className="category">Category 5</li>
      </ul>
    );
  }
}

export default Categories;
