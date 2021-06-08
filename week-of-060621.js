// Monday 6/7/21
// Sort Numbers (7kyu)
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

function solution(nums) {
  return nums !== null ? nums.sort((a, b) => a - b) : []
}
