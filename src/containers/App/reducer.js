import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_USER,
} from './constants';

const initialState = fromJS({
  user: {},
});

function globalPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case GET_USER:
      return state
        .set('user', action.payload);
    default:
      return state;
  }
}

export default globalPageReducer;
