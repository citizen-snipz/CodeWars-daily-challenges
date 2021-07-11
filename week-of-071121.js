// Sunday 7/11/21
// Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
function sumArray(array) {
  return array && array.length > 1
    ? array.reduce((acc, cur) => acc + cur) -
        Math.max(...array) -
        Math.min(...array)
    : 0
}
