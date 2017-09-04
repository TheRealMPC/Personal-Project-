import _ from 'lodash';
import { FETCH_RESTAURANTS, FETCH_RESTAURANT, DELETE_RESTAURANT, FETCH_ACTIVITIES, FETCH_ACTIVITY, DELETE_ACTIVITY, FETCH_STORES, FETCH_STORE, DELETE_STORE } from '../actions';

export default function (state = {}, action){
    switch (action.type) {
      case DELETE_RESTAURANT:
        return _.omit(state, action.payload);
      case FETCH_RESTAURANT:
        return { ...state, [action.payload.data.id]: action.payload.data };
      case FETCH_RESTAURANTS:
        return _.mapKeys(action.payload.data, 'id');
      case DELETE_ACTIVITY:
        return _.omit(state, action.payload);
      case FETCH_ACTIVITY:
        return { ...state, [action.payload.data.id]: action.payload.data };
      case FETCH_ACTIVITIES:
        return _.mapKeys(action.payload.data, 'id');
      case DELETE_STORE:
        return _.omit(state, action.payload);
      case FETCH_STORE:
        return { ...state, [action.payload.data.id]: action.payload.data };
      case FETCH_STORES:
        return _.mapKeys(action.payload.data, 'id');
      default:
        return state;
    }
  }
