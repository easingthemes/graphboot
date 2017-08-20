import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_DAYS
} from './constants';

const initialState = fromJS({
  initialDays: {
    'id': {
      count: 0,
      index: 0,
      id: 'id',
      date: new Date()
    }
  },
});

function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_DAYS:
      return state
        .set('initialDays', fromJS(action.payload));
    default:
      return state;
  }
}

export default calendarReducer;
