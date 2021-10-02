const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < count; i++) {
      const temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  };
  

  console.log(fibonacci(15));




    // F(n) = F(n-1) + F(n-2); Fib sequence formula

    // F(4) = F(4 - 1) + F(4 - 2);
            //3 + 2 = 5;








// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 









// Do not edit below this line
module.exports = fibonacci;




