import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodo } from '../../Actions/TodoActions';

export class Form extends React.Component {
  state = {};

  todo = {
    title: '',
    category: '',
    date: '',
    content: ''
  };

  constructor(props) {
    super(props);
  }

  clickHandler = (event) => {
    event.preventDefault();

    this.props.addTodo({
      title: this.todo.title.value,
      category: this.todo.category.value,
      date: this.todo.date.value,
      content: this.todo.content.value,
    });
  }

  render() {
    return (
      <div className="form-container">
        <div className="manage-form-buttons">
          <Link className="button" to="/">&lt; Back</Link>
        </div>
        <form method="">
          <label htmlFor="todo-title">
            <span>Title:</span>
            <input id="todo-title" name="title" type="text" ref={title => this.todo.title = title} placeholder="Enter ToDo title" />
          </label>
          <label htmlFor="todo-category">
            <span>Category:</span>
            <select id="todo-category" name="category" type="text" ref={category => this.todo.category = category} placeholder="Select Category">
              <option value="">Select Category</option>
              {this.props.categories.map((category) => {
                return <option value={category.id} key={category.id}>{category.name}</option>
              })}
            </select>
          </label>
          <label htmlFor="todo-datetime">
            <span>Date:</span>
            <input id="todo-title" name="datetime" type="datetime-local" ref={date => this.todo.date = date} placeholder="Pick Date & Time" />
          </label>
          <label htmlFor="todo-content">
            <span>Content:</span>
            <textarea id="todo-title" name="content" type="text" ref={content => this.todo.content = content} placeholder="Enter Content (optional)"></textarea>
          </label>
          <button onClick={this.clickHandler}>Save</button>
        </form>
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
    addTodo: (todo) => dispatch(addTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);