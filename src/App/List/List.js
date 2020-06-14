import React from 'react';
import './List.css';
import { Categories } from "./Categories/Categories";

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
                
        <Categories />
      </div>
    );
  }
}

export default List;
