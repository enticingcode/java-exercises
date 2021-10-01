const fibonacci = function(num) {
        var a = 1, b = 0, temp;
      
        while (num >= 0){
          temp = a;
          a = a + b;
          b = temp;
          num--;
        }
      
        return b;
      }

console.log(fibonacci(3));





    // F(n) = F(n-1) + F(n-2); Fib sequence formula











// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 









// Do not edit below this line
module.exports = fibonacci;




