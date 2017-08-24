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
      const initialDates = {};

      $('.day').each((i, el) => {
        const date = $(el).data('date');
        const count = $(el).data('count');
        initialDates[date] = {
          value: new Date(date),
          count: count,
          id: date
        };
      });

      dispatch({
        type: GET_CONTRIBUTIONS_DOM,
        payload: initialDates
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
