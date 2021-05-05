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
