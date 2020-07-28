import React from 'react';
import './List.css';
import Categories from "./Categories/Categories";
import CategoryForm from "./CategoryForm/CategoryForm";
import { Link } from 'react-router-dom';

export class List extends React.Component {
  state = {
    showCategoryForm: false,
    categoryId: null
  };

  constructor(props) {
    super(props);
  }

  openCategoryForm = () => {
    this.setState({
      ...this.state,
      showCategoryForm: true
    });
  };

  closeCategoryForm = () => {
    this.setState({
      ...this.state,
      showCategoryForm: false,
      categoryId: null
    });
  };

  editCategoryForm = (categoryId) => {
    this.setState({
      ...this.state,
      showCategoryForm: true,
      categoryId: categoryId
    });
  };

  render() {
    return (
      <div className="list-container">
        <div className="manage-list-buttons">
          <button className="button" onClick={this.openCategoryForm}>Add Category</button>
          <Link className="button" to="/add">Add ToDo</Link>
        </div>

        {this.state.showCategoryForm ? 
          (<div className="category-form">
            <CategoryForm onCancel={this.closeCategoryForm} categoryId={this.state.categoryId} />
          </div>) :
          null
        }
                
        <Categories editCategoryForm={this.editCategoryForm} />
      </div>
    );
  }
}

export default List;
