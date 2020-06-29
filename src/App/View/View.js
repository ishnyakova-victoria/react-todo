import React from 'react';
import './View.css';
import { Link } from "react-router-dom";

export class View extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view-container">
        <div className="manage-view-buttons">
          <Link className="button" to="/">&lt; Back</Link>
          <Link className="button" to="/">Edit</Link>
          <Link className="button" to="/">Delete</Link>
        </div>
        <div className="todo">
          <h2>Title</h2>
          <p>Category</p>
          <p className="remaining">Remaining</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </div>
    );
  }
}

export default View;
