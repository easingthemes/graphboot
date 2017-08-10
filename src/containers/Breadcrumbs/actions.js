import {
  DEFAULT_ACTION,
  ADD_BREADCRUMBS,
  REMOVE_BREADCRUMBS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function addBreadcrumbs(index, label = '', url) {
  return function(dispatch) {
    dispatch({
      type: ADD_BREADCRUMBS,
      payload: {
        index,
        label,
        url
      }
    });
  }
}

export function removeBreadcrumbs(index) {
  return function(dispatch) {
    dispatch({
      type: REMOVE_BREADCRUMBS,
      payload: {
        index
      }
    });
  }
}
