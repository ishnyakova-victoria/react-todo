import React from 'react';
import './View.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import * as moment from 'moment';
import { removeTodo } from '../../Actions/TodoActions';

export class View extends React.Component {
  state = {};
  todo = {};
  category = {};
  
  constructor(props) {
    super(props);

    const { todoId } = props.match.params;

    this.todo = this.getTodoById(parseInt(todoId));
    this.category = this.getCategoryById(this.todo.categoryId);
  }

  getTodoById = (todoId) => {
    const { todos } = this.props;

    const todo = todos.find((todo) => {
      return todo.id === todoId;
    });

    if (todo) {
      return todo;
    }

    return {
      title: '',
      datetime: null,
      content: ''
    };
  };

  getCategoryById = (categoryId) => {
    const { categories } = this.props;

    const category = categories.find((category) => {
      return this.todo.categoryId === category.id;
    });

    if (category) {
      return category;
    }

    return {
      name: ''
    };
  };

  isExpired = (time) => {
    return (new Date(time)) < (new Date()) ? true : false;
  };

  timeLeft = (time) => {
    return moment(time).fromNow();
  };

  removeTodo = () => {
    const isConfirmed = window.confirm('Do you really want to delete todo \'' + this.todo.title + '\'?');

    const { removeTodo, history } = this.props;

    if (isConfirmed) {
      removeTodo(this.todo.id);
    }

    history.push('/');
  };

  render() {
    return (
      <div className="view-container">
        <div className="manage-view-buttons">
          <Link className="button" to="/">&lt; Back</Link>
          <Link className="button" to={{
            pathname: '/edit/' + this.todo.id
          }}>
            Edit
          </Link>
          <button className="button" onClick={this.removeTodo}>Delete</button>
        </div>
        <div className="todo">
          <h2>{this.todo.title}</h2>
          <p>{this.category.name}</p>
          <p className={this.isExpired(this.todo.datetime) ? 'remaining expired' : 'remaining not-expired'}>{this.timeLeft(this.todo.datetime)}</p>
          <p>{this.todo.content}</p>
        </div>
      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View));
