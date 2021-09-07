const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((sum, num) => sum + num, 0)
	
};

const multiply = function(arr) {
  return arr.reduce((mult, num) => mult * num, 1)

};

const power = function(a, b) {
  return a**b
};

const factorial = function(num) {
  let fact = 1;
	for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
