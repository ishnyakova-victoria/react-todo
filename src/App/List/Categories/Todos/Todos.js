import React from 'react';
import './Todos.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as moment from 'moment';
import { removeTodo } from '../../../../Actions/TodoActions';

export class Todos extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  isExpired = (time) => {
    return (new Date(time)) < (new Date()) ? true : false;
  };

  timeLeft = (time) => {
    return moment(time).fromNow();
  };

  removeTodo = (todo) => {
    const isConfirmed = window.confirm('Do you really want to delete todo \'' + todo.title + '\'?');

    const { removeTodo } = this.props;

    if (isConfirmed) {
      removeTodo(todo.id);
    }
  };

  render() {
    return (
      <ul className="todos">
        {this.props.todos.filter((todo) => todo.categoryId === this.props.categoryId).map((todo) => {
          return (<li className="todo" key={todo.id}>
            <Link to={{
              pathname: '/view/' + todo.id
            }}>
              {todo.title}
            </Link>
            <span>
              <span className={this.isExpired(todo.datetime) ? 'expired' : 'not-expired'}>{this.timeLeft(todo.datetime)}</span>
              &nbsp;
              <Link to={{
                pathname: '/edit/' + todo.id
              }}>
                Edit
              </Link>
              &nbsp;
              <button className="btn-link" onClick={() => { this.removeTodo(todo) }}>Delete</button>
            </span>
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
    removeTodo: (todoId) => dispatch(removeTodo(todoId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);