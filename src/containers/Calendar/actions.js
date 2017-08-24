import axios from 'axios';
import cheerio from 'cheerio';

import {
  DEFAULT_ACTION,
  API_URL,
  GET_CONTRIBUTIONS_DOM,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
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
        const value = new Date(date);
        const count = $(el).data('count');
        const dateString = value.toDateString();
        const id = dateString.split(' ').join('-');

        if (count > 0) {
          initialDates[id] = {
            value,
            count
          };
        }
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
