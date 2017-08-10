import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ADD_BREADCRUMBS,
  REMOVE_BREADCRUMBS,
} from './constants';

const initialState = fromJS({
  breadcrumbs: [{
    label: 'Home',
    url: '/'
  }]
});

function breadcrumbsPageReducer(state = initialState, action) {
  const payload = action.payload || {};
  const index = payload.index;
  const label = payload.label;
  const url = payload.url;

  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case ADD_BREADCRUMBS:
      return state
        .update('breadcrumbs', breadcrumbs => breadcrumbs.set(index, {label, url}));

    case REMOVE_BREADCRUMBS:
      return state
        .update('breadcrumbs', breadcrumbs => breadcrumbs.update(index, breadcrumb => {}));

    default:
      return state;
  }
}

export default breadcrumbsPageReducer;
