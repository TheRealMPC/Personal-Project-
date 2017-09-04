import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import RestaurantPostsIndex from './components/restaurant_posts_index';
import RestaurantPostsNew from './components/restaurant_posts_new';
import RestaurantPostsShow from './components/restaurant_posts_show';

import ActivityPostsIndex from './components/activity_posts_index';
import ActivityPostsNew from './components/activity_posts_new';
import ActivityPostsShow from './components/activity_posts_show';

import StorePostsIndex from './components/store_posts_index';
import StorePostsNew from './components/store_posts_new';
import StorePostsShow from './components/store_posts_show';

import Callback from './components/callback';
import Home from './components/home';
import MyNav from './components/navbar';
import Timer from './components/timer';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>
      <Route path='/stores/new' component={StorePostsNew} />
      <Route path='/stores/:id' component={StorePostsShow} />
      <Route path='/stores' component={StorePostsIndex} />
      <Route path='/activities/new' component={ActivityPostsNew} />
      <Route path='/activities/:id' component={ActivityPostsShow} />
      <Route path='/activities' component={ActivityPostsIndex} />
      <Route path='/restaurants/new' component={RestaurantPostsNew} />
      <Route path='/restaurants/:id' component={RestaurantPostsShow} />
      <Route path='/restaurants' component={RestaurantPostsIndex} />
      <Route path="/callback" component={Callback} />
      <Route path='/' component={Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
