import { createSelector } from 'reselect';

const selectCalendarDomain = () => state => state.get('calendar');

const selectCalendar = () => createSelector(
  selectCalendarDomain(),
  (substate) => substate.toJS()
);

export default selectCalendar;
export {
  selectCalendar,
  selectCalendarDomain,
};
