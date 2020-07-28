import React from 'react';
import './Categories.css';
import Todos from "./Todos/Todos";
import { connect } from 'react-redux';
import { removeCategory, editCategory, toggleCategory, removeTodo } from '../../../Actions/TodoActions';

export class Categories extends React.Component {
  editCategory = (category) => {
    this.props.editCategoryForm(category.id);
  };

  removeCategory = (category) => {
    const isConfirmed = window.confirm('Do you really want to delete category \'' + category.name + '\' and all its todos?');

    if (!isConfirmed) {
      return false;
    }

    this.props.removeCategory(category.id);

    this.props.todos.forEach((todo) => {
      if (todo.categoryId !== category.id) {
        return;
      }

      this.props.removeTodo(todo.id);
    });
  };

  toggleCategory = (categoryId) => {
    this.props.toggleCategory(categoryId);
  };

  render() {
    return (
      <ul className="categories">
        {this.props.categories.map((category) => {
          return (
            <li className="category" key={category.id}>
              <div className="category-block">
                <button className="btn-link" onClick={() => { this.toggleCategory(category.id); }}>{category.name}</button>
                <span>
                  <button className="btn-link" onClick={() => { this.editCategory(category); }}>Edit</button>
                  <button className="btn-link" onClick={() => { this.removeCategory(category); }}>Delete</button>
                </span>
              </div>
              {!category.isCollapsed ? <Todos categoryId={category.id} /> : null}
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
  editCategory: (category) => dispatch(editCategory(category)),
  removeCategory: (id) => dispatch(removeCategory(id)),
  toggleCategory: (id) => dispatch(toggleCategory(id)),
  removeTodo: (id) => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);