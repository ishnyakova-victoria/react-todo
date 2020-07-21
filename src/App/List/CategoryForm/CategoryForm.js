import React from 'react';
import './CategoryForm.css';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addCategory } from '../../../Actions/TodoActions';

export const CategoryForm = (props) => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    props.addCategory({
      id: props.categories.length + 1,
      name: data.category
    });
  };

  return (
    <div className="category-form-container">
      <form method="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="category">
          <span>Category:</span>
          <input id="category" type="text" name="category" ref={register({required: "Category is required", minLength: {value: 3, message: "Category is too short"}})} className={errors.category ? 'input-error' : ''} />
          <span className="error-message">{errors.category && errors.category.message}</span>
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (category) => dispatch(addCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);