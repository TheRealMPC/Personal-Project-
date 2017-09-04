import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createActivity } from '../actions';
import MyNav from './navbar';


class ActivityPostsNew extends Component {
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
      this.props.createActivity(values, () => {
        this.props.history.push('/activities');
      });
    }

    render() {

      const { handleSubmit } = this.props;

      return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <MyNav />
        <Field
          label="Activity Name"
          name="name"
          component={this.renderField}
        />
        <Field
          label="Type of Activity"
          name="type"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/activities" className="btn btn-danger">Cancel</Link>
        </form>
      );
    }
  }

  function validate(values) {
    const errors = {};

    if(!values.name) {
      errors.name="Enter an activity!";
    }
    if(!values.type) {
      errors.type="Enter the type of activity!";
    }

    return errors;
  }

  export default reduxForm({
    validate,
    form: 'PostsNewForm'
  })(
    connect(null,{ createActivity })(ActivityPostsNew)
  );
