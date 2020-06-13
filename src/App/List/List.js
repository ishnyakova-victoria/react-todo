import React from 'react';
import './List.css';

export class List extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-container">This is List page</div>
    );
  }
}

export default List;
