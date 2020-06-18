import React from 'react';
import './List.css';
import Categories from "./Categories/Categories";
import { Link } from 'react-router-dom';

export class List extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-container">
        <div className="manage-list-buttons">
          <a className="button">Add Category</a>
          <Link className="button" to="/add">Add ToDo</Link>
        </div>
                
        <Categories />
      </div>
    );
  }
}

export default List;
