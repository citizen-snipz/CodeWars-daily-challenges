// Sun 3-28-21
// Leonardo Dicaprio and Oscars
//https://www.codewars.com/kata/56d49587df52101de70011e4/train/javascript
function leo(oscar) {
  if (oscar === 88) return "Leo finally won the oscar! Leo is happy";
  if (oscar === 86) return "Not even for Wolf of wallstreet?!";
  if (oscar < 88) return "When will you give Leo an Oscar?";
  else return "Leo got one already!";
}

//Mon 3-29-21
// Multiple of index
// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript
function multipleOfIndex(array) {
  return array.filter((num, idx) => num % idx === 0);
}

// "this" is a problem
// https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}

// String Templates - Bug Fixing #5
// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/javascript
function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}

// Tuesday 3-30-21
// Training JS #4: Basic data types--Array
// https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript
function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  arr.push(el);

  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
}

// Wednesday 3/31/21
// Convert to Binary
// https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript
function toBinary(n) {
  return Number(n.toString(2));
}

//Merge two sorted arrays into one
// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

// simple calculator
// https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript
function calculator(a, b, sign) {
  console.log(a, b, sign);
  if (isNaN(a) || isNaN(b)) return "unknown value";
  if (sign === "+") return a + b;
  if (sign === "-") return a - b;
  if (sign === "*") return a * b;
  if (sign === "/") return a / b;
  return "unknown value";
}

//Thursday 4/1/21
// Closest elevator
// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript
function elevator(left, right, call) {
  return Math.abs(left - call) < Math.abs(right - call) ? "left" : "right";
}

// No Loops 2 - You only need one
// https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript
const check = (a, x) => a.includes(x);

// Friday 4/2/21
// Return to Sanity
// https://www.codewars.com/kata/514a7ac1a33775cbb500001e/train/javascript
function mystery() {
  const results = { sanity: "Hello" };
  return results;
}

// Sum of differences in array
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
function sumOfDifferences(arr) {
  const sorted = arr.sort((a, b) => b - a);
  return sorted.reduce((acc, num, i, arr) => {
    return acc + (num - arr[i + 1]) || acc;
  }, 0);
}

console.log(sumOfDifferences([1, 4, 7, 12, 19]));

// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers) {
  const arr = numbers.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

// Are arrow functions odd?
// https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/train/javascript
const odds = (values) => values.filter((num) => num % 2 === 1);
