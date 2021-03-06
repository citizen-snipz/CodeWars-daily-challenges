// Reversing Words in a String
// https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

// Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}

// The falling speed of petals
// https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/train/javascript
const sakuraFall = (v) => (v <= 0 ? 0 : 400 / v);
