import { WEEKS_TOTAL } from '../constants';

// returns a new date shifted a certain number of days (can be negative)
export function shiftDate(date, numDays) {
  const dateCheck = convertToDate(date);
  const newDate = new Date(dateCheck);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

export function getBeginningTimeForDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// obj can be a parseable string, a millisecond timestamp, or a Date object
export function convertToDate(obj) {
  return (obj instanceof Date) ? obj : (new Date(obj));
}

export function getWeekNumber(d) {
  d = d || new Date();
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  return Math.ceil(( ((d - yearStart) / 86400000) + 1)/7);
}

export function weeksInYear(year) {
  const today = new Date();
  year = year || today.getUTCFullYear();

  const d = new Date(year, 11, 31);
  const week = getWeekNumber(d);
  return week === 1 ? getWeekNumber(d.setDate(24)) : week;
}

function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

export function daysInYear(year) {
  const today = new Date();
  year = year || today.getFullYear();

  return isLeapYear(year) ? 366 : 365;
}

export function getDay(dayIndex, weekIndex) {
  const today = new Date(),
    todayIndex = today.getDay(),
    index = WEEKS_TOTAL * 7 - weekIndex * 7 + todayIndex - dayIndex,
    step = dayIndex === 6 && dayIndex < todayIndex ? index : -index,
    date = shiftDate(today, step),
    dateString = date.toDateString();
  return {
    index,
    id: dateString.split(' ').join('-'),
    date: date
  }
}
