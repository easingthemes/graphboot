import { createSelector } from 'reselect';

const selectCounterDomain = () => state => state.get('counter');

const selectCounter = () => createSelector(
  selectCounterDomain(),
  (substate) => substate.toJS()
);

export default selectCounter;
export {
  selectCounter,
  selectCounterDomain,
};
