import axios from 'axios';

import {
  DEFAULT_ACTION,
  SET_DAYS,
  API_URL,
  GET_CONTRIBUTIONS_DOM,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setDays(data) {
  return dispatch => {
    dispatch({
      type: SET_DAYS,
      payload: data
    });
  }
}

export function getContributions(username) {
  return function(dispatch) {
    axios.get(API_URL, {
      params: {
        username
      },
      responseType: 'text'
    })
    .then(response => {
      dispatch({
        type: GET_CONTRIBUTIONS_DOM,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_CONTRIBUTIONS_DOM,
        payload: error
      });
    })
  }
}
