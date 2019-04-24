
// Write a function that can reverse any given string.

function reverseString(str) {
   return str.split("").reverse().join("");
}

//  example uses:
//  reverseString("12345"); returns "54321"
//  reverseString("Jordan"); returns "nadroJ"


// console.log(reverseString("Jordan"));

// console.log(reverseString("Hello my name is Jordan"));

// Write a function that can tell you whether or not a string is a palindrome.

function isPalindrome(str) {
   let newStr = str.toLowerCase();
   let len = Math.floor(newStr.length / 2);
   for (var i = 0; i < len; i++)
      if (newStr[i] !== newStr[newStr.length - i - 1])
         return false;
   return true;
}

// console.log(isPalindrome("123321"));
// console.log(isPalindrome("ana"));
// console.log(isPalindrome("ANA"));
// console.log(isPalindrome("an"));

function averageOf(arr) {
   let sum = 0;
   for (var i = 0; i < arr.length; i++) {
      sum += i;
   }
   let avg = sum / arr.length;
   return avg;
}



function fizzbuzz() {
   for(let i=0;i<100;)
  console.log(
    ( ++i%3 ? '' : 'fizz' ) + ( i%5 ? '' : 'buzz' ) || i
  );
}

fizzbuzz();

