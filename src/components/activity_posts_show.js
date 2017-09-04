import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchActivity, deleteActivity } from '../actions';
import MyNav from './navbar';
import Timer from './timer';



class ActivityPostsShow extends Component {
  componentDidMount(){
    if (!this.props.post){
      const { id } = this.props.match.params;
      this.props.fetchActivity(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deleteActivity(id, () => {
      this.props.history.push('/activities');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
      <MyNav />
      <div className="text-center jumbotron">
      <h3>{post.name}</h3>
      <h6>Type: {post.type}</h6>
      </div>
      <br />
      <div className="text-center">
      <Timer objId={post.name}/>
      </div>
      <br />
      <br />
      <div className="footer">
      <Link to="/activities" className="btn btn-primary">Back to Restaurants List</Link>
      <button
        className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}
        >
        Delete
        </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchActivity, deleteActivity })(ActivityPostsShow);
