import axios from 'axios';
import cookie from 'cookie-machine';

import { filterUser } from '../../helpers/filterUser';

import {
  API_URL,
  DEFAULT_ACTION,
  GET_USER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getUser() {
  return function(dispatch) {
    axios.get(`${API_URL}users`)
    .then(response => {
      dispatch({
        type: GET_USER,
        payload: filterUser(response.data)
      });
    })
    .catch(error => {
      dispatch({
        type: GET_USER,
        payload: error
      });
    })
  }
}
