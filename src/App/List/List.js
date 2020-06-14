import React from 'react';
import './List.css';
import { Link } from "react-router-dom";

export class List extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-container">
        <div className="manage-list-buttons">
          <button className="button">Add Category</button>
          <button className="button">Add ToDo</button>
        </div>
        <ul className="categories">
          <li className="category">Category 1
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
          </li>
          <li className="category">Category 2</li>
          <li className="category">Category 3</li>
          <li className="category">Category 4</li>
          <li className="category">Category 5</li>
        </ul>
      </div>
    );
  }
}

export default List;
