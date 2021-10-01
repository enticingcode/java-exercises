// const fibonacci = function(num) {
//         var a = 1, b = 0, temp;
      
//         while (num >= 0){
//           temp = a; 
//         //  Round 1: temp = 1;
//         //  Round 2: temp = 1;
//         //  Round 3: temp = 2;
//         //  Round 4: temp = 3;
//           console.log(temp)
//           a = a + b;
//         //  Round 1: a = 1 + 0;
//         //  Round 2: a = 1 + 1;
//         //  Round 3: a = 2 + 1;
//         //  Round 4: a = 
//           console.log(a);

//           b = temp;
//         // Round 1: b = 1;
//         // Round 2: b = 1;
//         // Round 3: b = 2;
//         // Round 4: b = 2;
//           console.log(b)
//           num--;  
//         //  Round 1: num = 2;
//         //  Round 2: num = 1;
//         //  Round 3: num = 0;
//         //  Round 4: num = -1;
//           console.log(num);
//         }
      
//         return b;
//       }

// console.log(fibonacci(3));


// EXAMPLE 2;


function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  console.log(fibonacci(2));



    // F(n) = F(n-1) + F(n-2); Fib sequence formula











// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 









// Do not edit below this line
module.exports = fibonacci;




