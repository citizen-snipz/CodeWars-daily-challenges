// Monday 6/7/21
// Sort Numbers (7kyu)
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

function solution(nums) {
  return nums !== null ? nums.sort((a, b) => a - b) : []
}

//Friday 6/11/21
// Sort the Gift Code (7kyu)
// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript
const sortGiftCode = (code) => code.split("").sort().join("")
