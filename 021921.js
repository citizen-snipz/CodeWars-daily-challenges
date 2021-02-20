//Keep up the hoop
// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145
function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

//Exclusive "or" (xor) Logical Operator
//https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/solutions/javascript
const xor = (a, b) => (a && !b) || (!a && b);
