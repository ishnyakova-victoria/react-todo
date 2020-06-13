import React from 'react';
import './List.css';

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
              <li className="todo">Todo 1</li>
              <li className="todo">Todo 2</li>
              <li className="todo">Todo 3</li>
              <li className="todo">Todo 4</li>
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
