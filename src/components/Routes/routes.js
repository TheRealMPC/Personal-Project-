import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import RestaurantPostsIndex from './../restaurant_posts_index';
import RestaurantPostsNew from './../restaurant_posts_new';
import RestaurantPostsShow from './../restaurant_posts_show';

import ActivityPostsIndex from './../activity_posts_index';
import ActivityPostsNew from './../activity_posts_new';
import ActivityPostsShow from './../activity_posts_show';

import StorePostsIndex from './../store_posts_index';
import StorePostsNew from './../store_posts_new';
import StorePostsShow from './../store_posts_show';

import Callback from './../callback';
import Home from './../home';


class Routes extends Component{
  render(){
    const FourOhFour=()=><h1>404</h1>
    return <BrowserRouter>
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
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  }
}

export default Routes;
