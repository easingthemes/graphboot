import axios from 'axios';
import { CONFLUENCE_API } from '../App/constants';
import { filterWiki, filterWikiParent } from '../../helpers/filterWiki';

import {
  DEFAULT_ACTION,
  GET_MATRIX,
  GET_MATRICES,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getMatrix(matrixId) {
  return function(dispatch) {
    axios.get(`${CONFLUENCE_API}content/${matrixId}`)
    .then(response => {
      dispatch({
        type: GET_MATRIX,
        payload: filterWiki(response.data)
      });
    })
    .catch(error => {
      dispatch({
        type: GET_MATRIX,
        payload: error
      });
    })
  }
}

export function getAllMatrices(parentPage) {
  return function(dispatch) {
    axios.get(`${CONFLUENCE_API}content/search?cql=parent="${parentPage}"`)
    .then(response => {
      dispatch({
        type: GET_MATRICES,
        payload: filterWikiParent(response.data)
      });
    })
    .catch(error => {
      dispatch({
        type: GET_MATRICES,
        payload: error
      });
    })
  }
}
