
import {
  DEFAULT_ACTION,
  SET_TOOLTIP,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setTooltip(value) {
  return dispatch => {
    dispatch({
      type: SET_TOOLTIP,
      payload: value
    });
  }
}
