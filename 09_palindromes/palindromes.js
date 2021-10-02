const palindromes = function (string) {
    const regex = /[^A-Za-z0-9]/g;
    let newString = string.toLowerCase().replace(regex, '');
    const arrayValues = newString.split("");
    const reverseArray = arrayValues.reverse();
    const reverseString = reverseArray.join("");
    
    if(newString == reverseString) {
        return true;
    }
    else {
            return false;
    }

};

console.log(palindromes("racecar"));


// const str = 'dr. awkward';
// const isPalindrome = (str = '') => {
//    const regex = /[^A-Za-z0-9]/g;
//    str = str.toLowerCase().replace(regex, '');
//    let len = str.length;
//    for (let i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//          return false;
//       };
//    };
//    return true;
// };

// console.log(isPalindrome(str));

// const string = prompt('Enter a String:');
// palindromes(string);






// program to check if the string is palindrome or not

// function checkPalindrome(str) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             // (string [0] !== string [5 - 1 - 0]) == (M[0] !==  M[4])
//             // (string [1] !== string [5 - 1 - 1]) == (A[1] !==  A[3])
//             // (string [2] !== string [5 - 1 - 2]) == (D[1] !==  D[2])
//             // (string [3] !== string [5 - 1 - 3]) == (A[1] !==  A[1])
//             // (string [4] !== string [5 - 1 - 4]) == (M[4] !==  M[0])
//             //
//             // M - A - D - A - M
//             // 0 - 1 - 2 - 3 - 4



//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);








// Do not edit below this line
module.exports = palindromes;
