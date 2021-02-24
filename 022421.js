// Reverse List Order
// https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript
const reverseList = (list) => list.reverse();

// Difference of Volumes of Cuboids
// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript
function findDifference(a, b) {
  let aVol = a.reduce((acc, el) => acc * el);
  let bVol = b.reduce((acc, el) => acc * el);
  return Math.abs(aVol - bVol);
}

// Generate range of integers
// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
function generateRange(min, max, step) {
  const arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

// Grasshopper - Check for factor
// https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/javascript
const checkForFactor = (base, factor) => base % factor === 0;
