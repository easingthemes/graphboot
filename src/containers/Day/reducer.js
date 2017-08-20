import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_TOOLTIP,
} from './constants';

const initialState = fromJS({
  tooltip: {
    date: '',
    count: 0,
    isActive: false
  },
});

function tooltipReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case SET_TOOLTIP:
      return state
        .set('tooltip', action.payload);
    default:
      return state;
  }
}

export default tooltipReducer;
