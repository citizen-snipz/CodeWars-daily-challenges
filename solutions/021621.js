//Stringy Strings 2/16/21
//https://www.codewars.com/kata/563b74ddd19a3ad462000054
function stringy(size) {
  let arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push(i % 2);
  }
  return arr.join("");
}
