import React from 'react';
import './Todos.css';
import { Link } from "react-router-dom";

export class Todos extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="todos">
        <li className="todo">
          <Link to="/view/1">Todo 1</Link>
        </li>
        <li className="todo">
          <Link to="/view/2">Todo 2</Link>
        </li>
        <li className="todo">
          <Link to="/view/3">Todo 3</Link>
        </li>
        <li className="todo">
          <Link to="/view/4">Todo 4</Link>
        </li>
      </ul>
    );
  }
}

export default Todos;
