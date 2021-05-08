// Tuesday 5/4/21
// Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}

//List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
function filter_list(l) {
  return l.filter((el) => typeof el === "number");
}

// Wednesday 5/5/21
// Odd or Even?
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
function oddOrEven(array) {
  return array.reduce((acc, num) => acc + num, 0) % 2 === 0 ? "even" : "odd";
}

// Reverse words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// Thursday 5/6/21
// The highest profit wins!
// https://www.codewars.com/kata/559590633066759614000063/train/javascript
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Don't give me five!
// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
function dontGiveMeFive(start, end) {
  let noFives = [];
  for (let i = start; i <= end; i++) {
    if (!String(i).includes(5)) {
      noFives.push(i);
    }
  }
  return noFives.length;
}

// Friday 5/7/21
// Take an Arrow to the knee, Functionally
// https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript
var ArrowFunc = function (arr) {
  return arr.map((el) => String.fromCharCode(el)).join("");
};

// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
const number = (array) => array.map((line, idx) => `${idx + 1}: ${line}`);

// Two Oldest Ages
// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript
function twoOldestAges(ages) {
  let filtered = [...ages].sort((a, b) => b - a).filter((age, idx) => idx < 2);
  return filtered.reverse();
}
