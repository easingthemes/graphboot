import {
  DEFAULT_ACTION,
  GET_COUNTER,
  SET_COUNTER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getCounter(data) {
  return dispatch => {
    dispatch({
      type: GET_COUNTER,
      payload: data
    });
  }
}

export function setCounter(data) {
  return dispatch => {
    dispatch({
      type: SET_COUNTER,
      payload: data
    });
  }
}
