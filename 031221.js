// Powers of 2
// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
function powersOfTwo(n) {
  let powers = [];
  for (let i = 0; i <= n; i++) {
    powers.push(Math.pow(2, i));
  }
  return powers;
}

// The Wide-Mouthed frog!
// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript
function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
