import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRestaurants } from '../actions';
import MyNav from './navbar';

class RestaurantPostsIndex extends Component {
  componentDidMount(){
    this.props.fetchRestaurants();
  }

  renderPosts() {
  return  _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
        <Link to={`/restaurants/${post.id}`}>
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
          <Link className="btn btn-primary" to="/restaurants/new">
            Add a New Timer
          </Link>
          </div>
          </div>
          <br />
          <br />
          <h3>Restaurants</h3>
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

export default connect(mapStateToProps, { fetchRestaurants })(RestaurantPostsIndex);
