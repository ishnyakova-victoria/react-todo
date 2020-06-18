import React from 'react';
import './Categories.css';
import { Todos } from "./Todos/Todos";
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
  categories: state.categories,
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  //toggleCategory: (id) => dispatch(toggleCategory(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
