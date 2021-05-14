// Tuesday 5/11/21
//Grasshopper - Order of operations
// https://www.codewars.com/kata/560ecf0cb040de130e00007d/train/javascript
function orderOperations() {
  return (2 + 2) * (2 + 2) * 2;
}

// Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
function longest(s1, s2) {
  let set1 = new Set(s1 + s2);
  return [...set1].sort().join("");
}

// Thursday 5/13/21 array methods homework

let nums = [6, 2, 1, 8, 10];

let sorted = nums.sort((a, b) => a - b);
sorted.pop();
sorted.shift();

let sum = sorted.reduce((total, num) => total + num, 0);

console.log(sum);
