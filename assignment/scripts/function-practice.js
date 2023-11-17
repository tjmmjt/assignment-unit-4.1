console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
console.log('--- hello ---');
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log('--- helloName ---');
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Tucker'));

// 3. Function to add two numbers together & return the result
console.log('--- addNumbers ---');
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(5, 3));

// 4. Function to multiply three numbers & return the result
console.log('--- multiplyThree ---');
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(multiplyThree(3, 2, 1));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log('--- isPositiveNumber ---');
function isPositive(number) {
  if (number > 0) {
    return true;
  } else
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log('--- getLast ---');
let testArray = [10, 20, 30];
// testArray = [];
function getLast(array) {
  if(array.length > 1){
  return array[array.length - 1];
} else
  return undefined;
}

console.log(getLast(testArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

testArray = [10, 20, 30];

console.log('--- find ---');
// 'return false' terminates loops!!! The value '20' is in my array, but when I would check for 20 it would still return false because
// 'return false' is WITHIN the for loop curly braces, so when the loop runs it checks the first value in my array (10) against the value were trying to find (20), 
// 10 !== 20 so it returns false and the loop is terminated. 

// function find(value, array) {
//   for(let item of array){
//     if(item === value){
//       return true;
//     }
//     return false;
//     }
//   }

// But when you move the 'return false' statement OUTSIDE of the for loop as a second statement
// of the function, it does not terminate the loop and it runs correctly. 

// function find(value, array) {
//   for(let item of array){
//     if(item === value){
//       return true;
//     }
//   }
//   return false;
// }

// This works because it's same as first, but shortened with 'return true' inline with 'if'. 
function find(value, array) {
  for(let item of array){
    if(item === value) return true;
    }
    return false;
  }

console.log(find(10, testArray));
console.log(find(15, testArray));
console.log(find(20, testArray));
console.log(find(25, testArray));
console.log(find(30, testArray));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log('--- isFirstLetter ----');
function isFirstLetter(letter, string) {
  if(Array.from(string)[0] === letter){
    return true;
  } else{
  return false;
}
}

console.log(isFirstLetter('S', 'String'));

// 9. Function to return the sum of all numbers in an array
console.log('--- summAll ---');

function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for(let numbers of array){
    sum += numbers;
  }
  // TODO: return the sum
  return sum;
}

console.log(sumAll(testArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('--- allPositive ---');
testArray.unshift(-30, -20, -10);
testArray.pop();
testArray.pop();
testArray.pop();
console.log(testArray);

let positives = [];

function allPositive(array) {
  for(numbers of array){
    if(numbers > 0){
      positives.push(numbers);
    }
  }
  return positives;
}

console.log(allPositive(testArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// TODO Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
// No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

console.log('--- CODEWARS ---');

let cwArray = [19, 5, 42, 2, 77];
let cwArray2 = [10, 343445353, 3453445, 3453545353453];

function sumTwoSmallestNumbers(array) {
  console.log('Unsorted array:', array); // testing
  array.sort(function(a, b){return a - b});
  console.log('Sorted array:', array); // testing
  let sum = array[0] + array[1];
  console.log('Sum of 2 lowest numbers:', sum); //testing
  return sum;
}

console.log('-- First Example --');
sumTwoSmallestNumbers(cwArray);
console.log('-- Second Example --');
sumTwoSmallestNumbers(cwArray2);

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
