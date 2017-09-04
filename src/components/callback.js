import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';
import config from '../../config';

class Callback extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/restaurants";
  }

  render() {
    return null;
  }
}

export default Callback;
