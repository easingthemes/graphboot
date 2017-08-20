import { createSelector } from 'reselect';

const selectTooltipDomain = () => state => state.get('tooltip');

const selectTooltip = () => createSelector(
  selectTooltipDomain(),
  (substate) => substate.toJS()
);

export default selectTooltip;
export {
  selectTooltip,
  selectTooltipDomain,
};
