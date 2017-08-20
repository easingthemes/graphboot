import {
  DEFAULT_ACTION,
  SET_DAYS,
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
