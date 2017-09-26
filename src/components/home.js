import React, { Component } from 'react';
import { fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { login, logout, isLoggedIn } from '../utils/AuthService';


const styles = StyleSheet.create({
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: '5s'
  }
});

class Home extends Component {
  // componentDidMount(){
  //   this.props.fetchPosts();
  // }

    render() {
      return (
        <div className="back">
        <div2 className={css(styles.fadeInLeft)}>
        Welcome...
        </div2>
        {
            (isLoggedIn()) ? ( <input type="image" className="loginButton"  src={require("../login-button.png")} onClick={() => logout()}></input> ) : ( <input type="image" className="loginButton"  src={require("../login-button.png")} onClick={() => login()}></input> )
        }
        </div>
      );
    }
  }

export default Home;
