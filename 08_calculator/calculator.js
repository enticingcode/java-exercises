const add = function (x, y) {
  return x + y;
};

// console.log(add(1, 2));

const subtract = function (x, y) {
  return x - y;
};
// console.log(subtract(10, 4))

const sum = function (numbers) {
  let x = numbers.reduce((total, currentValue) => {return total + currentValue}, 0)
  return x;
  }

console.log(sum([]));



const multiply = function () {

};

const power = function () {

};

const factorial = function () {

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
