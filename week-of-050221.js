// Tuesday 5/4/21
// Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}

//List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
function filter_list(l) {
  return l.filter((el) => typeof el === "number");
}

// Wednesday 5/5/21
// Odd or Even?
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
function oddOrEven(array) {
  return array.reduce((acc, num) => acc + num, 0) % 2 === 0 ? "even" : "odd";
}
