import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_COUNTER,
  GET_COUNTER
} from './constants';

const initialState = fromJS({
  counter: 0
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_COUNTER:
      return state
        .set('counter', action.payload);
    case GET_COUNTER:
      return state
        .get('counter', action.payload);
    default:
      return state;
  }
}

export default counterReducer;
