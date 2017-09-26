import axios from 'axios';

export const FETCH_RESTAURANTS = 'fetch_restaurants';
export const FETCH_RESTAURANT = 'fetch_restaurant'
export const CREATE_RESTAURANT = 'create_restaurant';
export const DELETE_RESTAURANT = 'delete_restaurant';

export const FETCH_ACTIVITIES = 'fetch_activities';
export const FETCH_ACTIVITY = 'fetch_activity'
export const CREATE_ACTIVITY = 'create_activity';
export const DELETE_ACTIVITY = 'delete_activity';

export const FETCH_STORES = 'fetch_stores';
export const FETCH_STORE = 'fetch_store'
export const CREATE_STORE = 'create_store';
export const DELETE_STORE = 'delete_store';


const ROOT_URL = 'http://localhost:3001/api';

export function fetchRestaurants() {
  const request = axios.get(`${ROOT_URL}/restaurants`);

  return {
    type: FETCH_RESTAURANTS,
    payload: request
  };
}

export function createRestaurant(values, cb) {
  const request = axios.post(`${ROOT_URL}/restaurants`, values)
  .then(() => cb());

  return {
    type: CREATE_RESTAURANT,
    payload: request
  };
}

export function fetchRestaurant(id) {
  const request = axios.get(`${ROOT_URL}/restaurant/${id}`);

  return {
    type: FETCH_RESTAURANT,
    payload: request
  };
}

export function deleteRestaurant(id, cb) {
  const request = axios.delete(`${ROOT_URL}/restaurant/${id}`)
  .then(() => cb());

  return {
    type: DELETE_RESTAURANT,
    payload: id
  };
}

export function fetchActivities() {
  const request = axios.get(`${ROOT_URL}/activities`);

  return {
    type: FETCH_ACTIVITIES,
    payload: request
  };
}

export function createActivity(values, cb) {
  const request = axios.post(`${ROOT_URL}/activities`, values)
  .then(() => cb());

  return {
    type: CREATE_ACTIVITY,
    payload: request
  };
}

export function fetchActivity(id) {
  const request = axios.get(`${ROOT_URL}/activity/${id}`);

  return {
    type: FETCH_ACTIVITY,
    payload: request
  };
}

export function deleteActivity(id, cb) {
  const request = axios.delete(`${ROOT_URL}/activity/${id}`)
  .then(() => cb());

  return {
    type: DELETE_ACTIVITY,
    payload: id
  };
}

export function fetchStores() {
  const request = axios.get(`${ROOT_URL}/stores`);

  return {
    type: FETCH_RESTAURANTS,
    payload: request
  };
}

export function createStore(values, cb) {
  const request = axios.post(`${ROOT_URL}/stores`, values)
  .then(() => cb());

  return {
    type: CREATE_STORE,
    payload: request
  };
}

export function fetchStore(id) {
  const request = axios.get(`${ROOT_URL}/store/${id}`);

  return {
    type: FETCH_STORE,
    payload: request
  };
}

export function deleteStore(id, cb) {
  const request = axios.delete(`${ROOT_URL}/store/${id}`)
  .then(() => cb());

  return {
    type: DELETE_STORE,
    payload: id
  };
}
