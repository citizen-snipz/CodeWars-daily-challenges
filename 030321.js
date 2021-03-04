// Printing Array elements with Comma delimiters
// https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
function printArray(array) {
  let letters = array.map((letter, idx) =>
    idx === array.length - 1 ? letter + "" : letter + ","
  );
  return letters.join("");
}

// Swap Values
// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/javascript
function swapValues(arguments) {
  var args = arguments;
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

// Training JS #7: if..else and ternary operator
// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
function saleHotdogs(n) {
  return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : 90 * n;
}
