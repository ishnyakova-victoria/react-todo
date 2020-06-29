import React from 'react';
import './Todos.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

export class Todos extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="todos">
        {this.props.todos.filter((todo) => todo.category === this.props.category).map((todo) => {
          return (<li className="todo" key={todo.id}>
            <Link to={{
              pathname: '/view/' + todo.id
            }}>
              {todo.title}
            </Link>
          </li>);
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

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);