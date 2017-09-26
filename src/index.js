import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import Routes from './components/Routes/routes'
import './style/style.css';
import './style/restaurantscss.css';


const store = createStore(reducers,
  applyMiddleware(promise));

ReactDOM.render(
    <Provider store={store} >
      <Routes />
    </Provider>
  , document.querySelector('.container')
);
