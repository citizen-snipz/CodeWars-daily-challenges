// What's the real floor?
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = (n) => (n < 1 ? n : n > 13 ? n - 2 : n - 1);

// SpeedCode #2 - Array Madness
// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
function arrayMadness(a, b) {
  let arrA = a.reduce((acc, num) => acc + num ** 2, 0);
  let arrB = b.reduce((acc, num) => acc + num ** 3, 0);
  return arrA > arrB;
}
