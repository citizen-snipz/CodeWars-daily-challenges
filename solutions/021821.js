//Multiples of 3 or 5
//https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

//All Star Code Challenge #18
// https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
