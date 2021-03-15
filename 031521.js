// Thinkful - Number Drills: Blue and red marbles
// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b/train/javascript
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const blues = blueStart - bluePulled;
  const reds = redStart - redPulled;
  return blues / (blues + reds);
}

// Training JS #2: Basic data types--Number
// https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript
var v1 = 50;
(v2 = 100), (v3 = 150), (v4 = 200), (v5 = 2), (v6 = 250);
function equal1() {
  var a = v1;
  var b = v1;
  return a + b;
}
//Please refer to the example above to complete the following functions
function equal2() {
  var a = v3;
  var b = v1;
  return a - b;
}
function equal3() {
  var a = v1;
  var b = v5;
  return a * b;
}
function equal4() {
  var a = v4;
  var b = v5;
  return a / b;
}
function equal5() {
  var a = v6;
  var b = v3;
  return a % b;
}
