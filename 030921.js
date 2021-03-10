// Sum The Strings
// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
const sumStr = (a, b) => String(+a + +b);

// Lario and Muigi Pipe Problem
// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
function pipeFix(numbers) {
  let arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
}

// Formatting decimal places #0
// https://www.codewars.com/kata/5641a03210e973055a00000d/train/javascript
const twoDecimalPlaces = (n) => +n.toFixed(2);

// Welcome to the City
// https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript
function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

// Incorrect division method
// https://www.codewars.com/kata/54d1c59aba326343c80000e7/train/javascript
const solve = (x, y) => x / y;
