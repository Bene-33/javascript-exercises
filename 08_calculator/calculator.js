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

const power = function() {
	
};

const factorial = function() {
	
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
