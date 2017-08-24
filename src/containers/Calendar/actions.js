import axios from 'axios';
import cheerio from 'cheerio';

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
      const $ = cheerio.load(response.data);
      $('.day').each(() => {
        console.log($(this).data('day'), $(this).data('count'));
      });

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
