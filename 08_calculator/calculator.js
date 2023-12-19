const add = function(x,y) {
  return x + y;
	
};

const subtract = function(x,y) {
  return x-y;
	
};

const sum = function(array) {
  let sum = array.reduce((a, b) => {
    return a + b}, 0);
    return sum;
};

const multiply = function(array) {
  let multiply = array.reduce((a, b) => {
    return a * b},1);
    return multiply;
};

const power = function(base, exponent) {
  return base**exponent;
	
};

const factorial = function(number) {
  if (number === 0 || number === 1){
    return 1;
  } 
  for(let i = number-1; i > 1; i--){
    number *= i;
  };
  return number;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
