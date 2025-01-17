import React, { useReducer } from 'react';
import './Form.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodo, editTodo } from '../../Actions/TodoActions';
import { useForm } from 'react-hook-form';

export const Form = (props) => {
  const { handleSubmit, register, setValue, errors } = useForm();

  const getTodoById = (todoId) => {
    const { todos } = props;

    const todo = todos.find((todo) => {
      return todo.id === todoId;
    });

    if (todo) {
      return todo;
    }

    return {
      id: null,
      title: '',
      categoryId: null,
      datetime: '',
      content: ''
    };
  };

  const { todoId } = props.match.params;

  const todo = getTodoById(parseInt(todoId));

  const onSubmit = (data) => {
    if (todoId) {
      props.editTodo({
        ...data, 
        id: todo.id,
        categoryId: parseInt(data.categoryId)
      });  
    } else {
      props.addTodo({
        ...data, 
        id: props.todos.length + 1,
        categoryId: parseInt(data.categoryId)
      });  
    }

    props.history.push('/');
  };

  return (
    <div className="form-container">
      <div className="manage-form-buttons">
        <Link className="button" to="/">&lt; Back</Link>
      </div>
      <form method="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="todo-title">
          <span>Title:</span>
          <input id="todo-title" name="title" type="text" ref={register({required: "Title is required", minLength: {value: 3, message: "Title is too short"}})} defaultValue={todo.title} placeholder="Enter ToDo title" className={errors.title ? 'input-error' : ''}/>
          <span className="error-message">{errors.title && errors.title.message}</span>
        </label>
        <label htmlFor="todo-category">
          <span>Category:</span>
          <select id="todo-category" name="categoryId" type="text" ref={register({required: "Category is required"})} defaultValue={todo.categoryId} placeholder="Select Category" className={errors.category ? 'input-error' : ''}>
            <option value="">Select Category</option>
            {props.categories.map((category) => {
              return <option value={category.id} key={category.id}>{category.name}</option>
            })}
          </select>
          <span className="error-message">{errors.category && errors.category.message}</span>
        </label>
        <label htmlFor="todo-datetime">
          <span>Date:</span>
          <input id="todo-title" name="datetime" type="datetime-local" ref={register({required: "Datetime is required"})} defaultValue={todo.datetime} placeholder="Pick Date & Time"  className={errors.datetime ? 'input-error' : ''}/>
          <span className="error-message">{errors.datetime && errors.datetime.message}</span>
        </label>
        <label htmlFor="todo-content">
          <span>Content:</span>
          <textarea id="todo-title" name="content" type="text" ref={register} placeholder="Enter Content (optional)" defaultValue={todo.content}></textarea>
        </label>
        <button>Save</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories,
    todos: state.todoReducer.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    editTodo: (todo) => dispatch(editTodo(todo))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));