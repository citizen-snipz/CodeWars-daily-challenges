// Tip Calculator
// https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript
function calculateTip(amount, rating) {
  const rate = rating.toLowerCase();
  if (rate === "excellent") return Math.ceil(amount * 0.2);
  if (rate === "great") return Math.ceil(amount * 0.15);
  if (rate === "good") return Math.ceil(amount * 0.1);
  if (rate === "poor") return Math.ceil(amount * 0.05);
  if (rate === "terrible") return 0;
  return "Rating not recognised";
}

// Add Length
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
function addLength(str) {
  return str.split(" ").map((word) => `${word} ${word.length}`);
}

// What is between?
// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
function between(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
