//You're a square!
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e
const isSquare = (n) => Number.isInteger(Math.sqrt(n));

//Quarter of the year
//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
const quarterOf = (month) => {
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
};
