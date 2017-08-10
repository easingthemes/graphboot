import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_BADGES,
} from './constants';

const initialState = fromJS({
  epicName: '',
  total: 0,
  badges: [],
});

function badgesPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case GET_BADGES:
      return state
        .set('epicName', action.payload.epicName)
        .set('badges', action.payload.badges)
        .set('total', action.payload.total);
    default:
      return state;
  }
}

export default badgesPageReducer;
