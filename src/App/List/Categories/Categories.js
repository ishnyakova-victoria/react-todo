import React from 'react';
import './Categories.css';
import Todos from "./Todos/Todos";
import { connect } from 'react-redux';

export class Categories extends React.Component {
  render() {
    return (
      <ul className="categories">
        {this.props.categories.map((category) => {
          return (
            <li className="category" key={category.id}>{category.name}
              <Todos category={category.id} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories,
    todos: state.todoReducer.todos
  };
};

const mapDispatchToProps = (dispatch) => ({
  //toggleCategory: (id) => dispatch(toggleCategory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);