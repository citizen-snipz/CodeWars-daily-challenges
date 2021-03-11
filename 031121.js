// Find Multiples of a Number
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
function findMultiples(integer, limit) {
  let multiples = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}
