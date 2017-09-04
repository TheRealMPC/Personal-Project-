import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStores } from '../actions';
import MyNav from './navbar';

class StorePostsIndex extends Component {
  componentDidMount(){
    this.props.fetchStores();
  }

  renderPosts() {
  return  _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
        <Link to={`/stores/${post.id}`}>
          {post.name}
        </Link>
        </li>
      );
    });
  }

    render() {
      return (
        <div>
          <MyNav />
          <div className="text-xs-right">
          <div className="col-md-4 text-center">
          <br />
          <Link className="btn btn-primary" to="/stores/new">
            Add a New Timer
          </Link>
          </div>
          </div>
          <br />
          <br />
          <h3>Stores</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchStores })(StorePostsIndex);
