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

console.log(sum([1, 2, 3]));



const multiply = function (numbers) {
  let x = numbers.reduce((total, currentValue) => {return total * currentValue})
  return x;
};
console.log(multiply([3, 5]))

const power = function (x, y) {
  let result = Math.pow(x, y);
  return result;
};

console.log(power(4, 3));

const factorial = function (num) {
  if (num < 0) {
    return -1
  } else if (num==0)  
    return 1;
    else {
      return (num * factorial(num -1))
    }
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
