// Find the Remainder
// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript
function remainder(a, b) {
  return a > b ? a % b : a < b ? b % a : a === b && a != 0 ? 0 : "NaN";
}

// Multiplication table for number
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript
function multiTable(number) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${number * i}${i === 10 ? "" : "\n"}`;
  }
  return table;
}

//Find the position!
// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
function position(letter) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}

// Name Shuffler
// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
const nameShuffler = (str) => str.split(" ").reverse().join(" ");
