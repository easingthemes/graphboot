import { createSelector } from 'reselect';

const selectMatrixPageDomain = () => state => state.get('matrixPage');

const selectMatrix = () => createSelector(
  selectMatrixPageDomain(),
  (substate) => substate.toJS()
);

export default selectMatrix;
export {
  selectMatrix,
  selectMatrixPageDomain,
};
