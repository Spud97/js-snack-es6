function generateNumbers(min, max) {
  if (min === undefined || min === null || min < 0) {
    return;
  }

  if (max === undefined || max < min + 1) {
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
}
