import { createSelector } from 'reselect';

const selectDayDomain = () => state => state.get('calendar');

const selectDay = () => createSelector(
  selectDayDomain(),
  (substate) => substate.toJS()
);

export default selectDay;
export {
  selectDay,
  selectDayDomain,
};
