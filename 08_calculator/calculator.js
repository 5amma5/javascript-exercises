const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	return numArray.reduce((accum, currentValue) => accum + currentValue, 0);
  // const sum = numArray.reduce((accum, currentValue) => accum + currentValue, 0);
  // return sum;
};

const multiply = function(numArray) {
	return numArray.reduce((accum, currentValue) => accum * currentValue, 1);
};

const power = function(num, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  if (num < 0) {return "Number must be 0 or greater"}
  if (num === 2) { result = 2 }
  if (num > 2) {
    for (let count = 1; count <= num; count++) {
      result *= count;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
