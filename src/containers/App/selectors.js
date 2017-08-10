import { createSelector } from 'reselect';

const selectGlobalPageDomain = () => state => state.get('global');

const selectGlobal = () => createSelector(
  selectGlobalPageDomain(),
  (substate) => substate.toJS()
);

export default selectGlobal;
export {
  selectGlobal,
  selectGlobalPageDomain,
};
