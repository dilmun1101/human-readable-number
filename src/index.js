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
  100: 'hundred',
};

module.exports = function toReadable(number) {
  let hundreds = 0;
  let tens = 0;
  let ones = 0;

  if (number <= 20) return numbersName[number];
  if (number < 100) {
    tens = Math.floor(number / 10) * 10;
    ones = number % 10;

    return ones === 0
      ? numbersName[tens]
      : `${numbersName[tens]} ${toReadable(ones)}`;
  }

  hundreds = Math.floor(number / 100);
  const rest = number % 100;

  return rest === 0
    ? `${numbersName[hundreds]} ${numbersName[100]}`
    : `${numbersName[hundreds]} ${numbersName[100]} ${toReadable(rest)}`;
};
