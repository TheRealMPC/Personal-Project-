import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStore } from '../actions';
import MyNav from './navbar';


class StorePostsNew extends Component {
    renderField(field) {
      const { meta: {touched, error} } = field;
      const className = `form-group ${touched && error ? 'has-danger' : '' }`;

      return (
        <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
        {touched ? error : ''}
        </div>
        </div>
      );
    }

    onSubmit(values) {
      this.props.createStore(values, () => {
        this.props.history.push('/stores');
      });
    }

    render() {

      const { handleSubmit } = this.props;

      return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <MyNav />
        <Field
          label="Store Name"
          name="name"
          component={this.renderField}
        />
        <Field
          label="Type of Store"
          name="type"
          component={this.renderField}
        />
        <Field
          label="Price"
          name="price"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/stores" className="btn btn-danger">Cancel</Link>
        </form>
      );
    }
  }

  function validate(values) {
    const errors = {};

    if(!values.name) {
      errors.name="Enter a store name!";
    }
    if(!values.type) {
      errors.type="Enter the type of store!";
    }
    if(!values.price) {
      errors.price="Enter the price!";
    }

    return errors;
  }

  export default reduxForm({
    validate,
    form: 'PostsNewForm'
  })(
    connect(null,{ createStore })(StorePostsNew)
  );
