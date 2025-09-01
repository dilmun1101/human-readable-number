module.exports = function toReadable(number) {
  const numbersName = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  const numberToString = String(number);
  if (number < 20) {
    return numbersName[number];
  }
  if (number >= 20 && number < 100 && number % 10 === 0) {
    return `${numbersName[number]}`;
  }
  if (number >= 20 && number < 100 && number % 10 !== 0) {
    return `${numbersName[Math.floor(number / 10) * 10]} ${numbersName[number % 10]}`;
  }
  if (
    number >= 100 &&
    number < 1000 &&
    +numberToString[1] === 0 &&
    number % 100 === 0
  ) {
    return `${numbersName[Math.floor(number / 100)]} hundred`;
  }
  if (
    number > 100 &&
    number < 1000 &&
    +numberToString[1] === 0 &&
    number % 10 !== 0
  ) {
    return `${numbersName[Math.floor(number / 100)]} hundred ${numbersName[number % 10]}`;
  }
  if (
    number > 100 &&
    number < 1000 &&
    +numberToString[1] === 1 &&
    number % 100 !== 0
  ) {
    return `${numbersName[Math.floor(number / 100)]} hundred ${numbersName[number % 100]}`;
  }
  if (
    number > 100 &&
    number < 1000 &&
    +numberToString[1] !== 0 &&
    number % 10 === 0
  ) {
    return `${numbersName[Math.floor(number / 100)]} hundred ${numbersName[+numberToString[1] * 10]}`;
  }
  if (
    number > 100 &&
    number < 1000 &&
    +numberToString[1] !== 0 &&
    number % 10 !== 0
  ) {
    return `${numbersName[Math.floor(number / 100)]} hundred ${numbersName[+numberToString[1] * 10]} ${numbersName[number % 10]}`;
  }
  return '';
};
