import React from 'react';
import './CategoryForm.css';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addCategory, editCategory } from '../../../Actions/TodoActions';

export const CategoryForm = (props) => {
  const { handleSubmit, register, errors } = useForm();

  const getCategoryById = (categoryId) => {
    const { categories } = props;

    let category = categories.find((category) => {
      return category.id === categoryId;
    });

    if (!category) {
      category = {
        id: null,
        name: '',
        isCollapsed: false
      };
    }

    return category;
  }

  const { categoryId } = props;

  const category = getCategoryById(categoryId);

  const onSubmit = (data) => {
    if (categoryId) {
      props.editCategory({
        id: category.id,
        name: data.category,
        isCollapsed: category.isCollapsed
      });

      props.onCancel();
    } else {
      props.addCategory({
        id: props.categories.length + 1,
        name: data.category,
        isCollapsed: false
      });  
    }
  };

  return (
    <div className="category-form-container">
      <form method="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="category">
          <span>Category:</span>
          <input id="category" type="text" name="category" ref={register({required: "Category is required", minLength: {value: 3, message: "Category is too short"}})} defaultValue={category.name} className={errors.category ? 'input-error' : ''} />
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
    addCategory: (category) => dispatch(addCategory(category)),
    editCategory: (category) => dispatch(editCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);