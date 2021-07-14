// // Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// // For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// // Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// // Test.assertEquals(solve([[1,2],[4],[5,6]]),4);
// // Test.assertEquals(solve([[1,2],[4,4],[5,6,6]]),4);
// // Test.assertEquals(solve([[1,2],[3,4],[5,6]]),8);
// // Test.assertEquals(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);

// // P: Can I expect a consistent number of arrays? Will there be empty arrays? Will there be any data types aside from numbers in the arrays? Will the numbers be integers? Will my function take in a single array of arrays, or multiple arrays as parameters?
// // R: Am I returning a number?
// // E: see above
// // P:
// /*
//     make a function that takes in one array of arrays
//     map through the array, while mapping through the array, turn each array into a Set
//     with duplicates removed from each array, take the length of the mapped arrays
//     return the product of the mapped subarrays' lengths
// */

// function uniqueArrays(arr) {
//   let uniqueNums = arr.map((num) => [...new Set(num)].length)
//   return uniqueNums.reduce((acc, num) => acc * num)
// }

// console.log(uniqueArrays([[1, 2], [4], [5, 6]]))
// console.log(
//   uniqueArrays([
//     [1, 2],
//     [4, 4],
//     [5, 6, 6]
//   ])
// )
// console.log(
//   uniqueArrays([
//     [1, 2],
//     [3, 4],
//     [5, 6]
//   ])
// )
// console.log(
//   uniqueArrays([
//     [1, 2, 3],
//     [3, 4, 6, 6, 7],
//     [8, 9, 10, 12, 5, 6]
//   ])
// )

// // Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// // Return your answer as a number.

// // assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// // assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
// // assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// // P: Are the strings special characters, or should I expect them to be numbers that are strings? Will it only take in a single array? Will I need to consider an empty array? Will I encounter any other data types?
// // R: Will the returned number be an integer?
// // E: see above
// // P:
// /*
// make a function that takes an array
// reduce array of numbers to a single sum, initialize with 0
// */

// const sumOfArray = (arr) => arr.reduce((acc, num) => acc + +num, 0)

// // console.log(sumOfArray([9, 3, "7", "3"]))
// // console.log(sumOfArray(["5", "0", 9, 3, 2, 1, "9", 6, 7]))
// // console.log(sumOfArray(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]))

// //Saturday JAM 7/9/21

// // Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even". If the input array is empty consider it as: [0] (array with a zero). Examples: Input: [0] Output: "even" Input: [0, 1, 4] Output: "odd" Input: [0, -1, -5] Output: "even"

// //P integers only? array? array ever empty?

// //R a string of "even" or 'odd'

// //E
// // [0] => 'even'
// // [0,1,4] => 'odd'
// //P

// // function array
// function oddOrEven(arr) {
//   return arr.reduce((a, c) => {
//     return a + c
//   }, 0) %
//     2 ==
//     0
//     ? "even"
//     : "odd"
// }

// Monday 7/12/21
// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// Test.assertEquals(repeats([4,5,7,5,4,8]),15);
// Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
// Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
// Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
// Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);
//P: Will there be an empty array or null? Will there be any other data types besides an array? Will there only be integers in the array?
//R: If I have an empty array/null, what should my function return? Should the return be a single number that is the sum of the non-repeating numbers?
//E: see above
//P:
/* 
  Make a function that takes in an array
  Capture numbers that only have one instance in the array
  Return the sum of the unique numbers
*/

const repeats = (arr) =>
  arr
    .filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))
    .reduce((a, b) => a + b, 0)

console.log(repeats([4, 5, 7, 5, 4, 8]), 15)
console.log(repeats([9, 10, 19, 13, 19, 13]), 19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22)
console.log(repeats([5, 10, 19, 13, 10, 13]), 24)

// Tuesday 7/13 class
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

//P: Should I only expect a string? Will there ever be an empty string? Will these words in the string be separated by a delimiter? Will there always be a space? Will there be any special characters in the given string? Will all the words in the string be the same case?
//R: Will this return a string? Will that string contain words that are just unique consecutive partners?
//E: "one one two three three three four" => "one two three four"
//P:
/*
  make a function that takes in a string of space delimited words
  split string into an array of words
  create a set to remove duplicates
  join to make a string and return 
 */

function removeDupWords(str) {
  // let newArr = str.split(' ')
  // return [...new Set(newArr)].join(' ')

  return str
    .split(" ")
    .filter((el, i, arr) => el !== arr[i + 1])
    .join(" ")
}

console.log(
  removeDupWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
)
