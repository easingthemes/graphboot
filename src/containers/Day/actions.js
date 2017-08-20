
import {
  DEFAULT_ACTION,
  GET_DAY_DATA,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getDayData(value) {
  return dispatch => {
    dispatch({
      type: GET_DAY_DATA,
      payload: value
    });
  }
}
