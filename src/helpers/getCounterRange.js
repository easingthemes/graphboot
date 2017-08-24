export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getCounterBoundaries(num) {
  const min = Math.floor(num / 50) * 50;

  return {
    min: min,
    max: min + 50
  }
}

export function getRandomCounter(counter) {
  if (counter === 0) {
    return 0;
  }

  const counterBoundaries = getCounterBoundaries(counter);

  return getRandomInt(counterBoundaries.min + 1, counterBoundaries.max - 1);
}
