json = (require('./data')); 
// **1.** Write a function that takes in a parameter called `num`, and returns a random number between 0 and `num`. Look up documentation for
 // [Math.Random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

let getRandomNum = function(num){
   let randomNumber = Math.floor(Math.random() * num);
   return randomNumber;
}

console.log(getRandomNum(6)); // returns a random number between 0 and 6
console.log(getRandomNum(10)); // returns a random number between 0 and 10
console.log(getRandomNum(2)); // returns a random number between 0 and 2
///////////********** Question #2 /////////////////////////////
// **2.** A leap year has one day added to February for being synchronized with the seasonal year. 
// A leap year appears with a regular frequency, which is determined by the rule below:

let isLeap = function(year){
isleap = false;
if(year % 4 != 0){
    isleap = false;
} else if (year % 100 != 0) {
    isleap = true;
} else if (year % 400 != 0) {
isleap = false;
} else{
    isleap = true;
}
return isleap;
}

console.log(isLeap(2020)); // true // Exactly divided by 4 and not by 100.
console.log(isLeap(1800)); //false // Exactly divided by 4, but is also exactly divided by 100.
console.log(isLeap(2000)); // true // Exactly divided by 400.
console.log(isLeap(2019)); // false // It can't be exactly divided by 400 or by 4.
console.log(isLeap(1824)); // false // It can't be exactly divided by 400 or by 4.
console.log(isLeap(2056)); // false // It can't be exactly divided by 400 or by 4.

