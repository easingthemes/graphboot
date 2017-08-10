import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_MATRIX,
  GET_MATRICES,
} from './constants';

const initialState = fromJS({
  matrixName: '',
  content: '',
  matrices: []
});

function matrixPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case GET_MATRIX:
      return state
        .set('matrixName', action.payload.epicName)
        .set('content', action.payload.value);

    case GET_MATRICES:
      return state
        .set('matrices', action.payload);

    default:
      return state;
  }
}

export default matrixPageReducer;
