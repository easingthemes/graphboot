import range from 'lodash/range';
import { shiftDate } from './dateHelpers';

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function getInitialDays(count, date = new Date()) {
  const datesObject = {};

  range(165).forEach(() => {
    const randomDate = getRandomDate(shiftDate(date, -count), date);
    const randomDateString = randomDate.toDateString();
    const newId = randomDateString.split(' ').join('-');
    datesObject[newId] = {
      value: randomDate,
      count: getRandomInt(1, 255)
    };
  });

  const today = new Date();
  const dateString = today.toDateString();
  const id = dateString.split(' ').join('-');

  datesObject[id] = {
    value: today,
    count: 10
  };

  return datesObject;
}
