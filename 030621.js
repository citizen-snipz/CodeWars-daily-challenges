// Grasshopper - Basic Function Fixer
// https://www.codewars.com/kata/56200d610758762fb0000002/train/javascript
function addFive(num) {
  var total = num + 5;
  return total;
}

// Kata Example Twist
// https://www.codewars.com/kata/525c1a07bb6dda6944000031/train/javascript
const websites = [];
for (let i = 0; i < 1000; i++) {
  websites.push("codewars");
}

// Super Duper Easy
// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript
function problem(x) {
  return typeof x === "string" ? "Error" : x * 50 + 6;
}

// Find the Difference in Age between Oldest and Youngest Family Members
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
function differenceInAges(ages) {
  let sorted = ages.sort((a, b) => a - b);
  return [
    sorted[0],
    sorted[sorted.length - 1],
    sorted[sorted.length - 1] - sorted[0]
  ];
}
