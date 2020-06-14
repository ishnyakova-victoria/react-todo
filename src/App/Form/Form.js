import React from 'react';
import './Form.css';

export class Form extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <label htmlFor="todo-title">
            <span>Title:</span>
            <input id="todo-title" name="title" type="text" placeholder="Enter ToDo title" />
          </label>
          <label htmlFor="todo-category">
            <span>Category:</span>
            <select id="todo-category" name="title" type="text" placeholder="Select Category">
              <option value="">Select Category</option>
              <option value="category-1">Category 1</option>
              <option value="category-2">Category 2</option>
              <option value="category-3">Category 3</option>
              <option value="category-4">Category 4</option>
            </select>
          </label>
          <label htmlFor="todo-datetime">
            <span>Date:</span>
            <input id="todo-title" name="title" type="datetime-local" placeholder="Pick Date & Time" />
          </label>
          <label htmlFor="todo-content">
            <span>Content:</span>
            <textarea id="todo-title" name="title" type="text" placeholder="Enter Content (optional)"></textarea>
          </label>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default Form;
