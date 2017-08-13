import axios from 'axios';
import cheerio from 'cheerio';

import { filterUser } from '../../helpers/filterUser';

import {
  DEFAULT_ACTION,
  GET_USER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getUser(username) {
  return function(dispatch) {
    axios.get(`https://github.com/users/${username}/contributions`)
    .then(response => {
      console.log('all',response.data);
      dispatch({
        type: GET_USER,
        payload: filterUser(response.data),
        error: false
      });
      const $ = cheerio.load(response.data, { ignoreWhitespace: true, decodeEntities: true });
      const $weeks = $('g', 'g');
      const $days = $('rect', $weeks);

      return $days;
    })
      .then(days => {
        console.log('days',days);
      })
    .catch(error => {
      console.log('err', error);
      dispatch({
        type: GET_USER,
        payload: error,
        error: true
      });
    })
  }
}
