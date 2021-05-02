function factorialize(number) {
  if (number < 0) {
    throw new RangeError('Factorials are only defined for positive numbers');
  }
  if (number != Math.trunc(number)) {
    throw new RangeError('Factorials are only defined for integers');
  }
  else {
    if (number == 0 || number == 1) {
      return 1;
    }
    else {
      let result = number;
      while (number > 1) {
        number--;
        result *= number;
      }
      return result;
    }
  }
}

export {factorialize}