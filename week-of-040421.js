// Sunday 4/4/21
// Remove the time
// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
function shortenToDate(longDate) {
  const removeTime = longDate.split(",");
  return removeTime[0];
}

// Who is going to pay for the wall?
// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript
function whoIsPaying(name) {
  return name.length < 3 ? [name] : [name, name.slice(0, 2)];
}

// Find out whether the shape is a cube
// https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript
var cubeChecker = function (volume, side) {
  return volume === Math.pow(side, 3) && volume > 0 && side > 0;
};

// Monday 4/5/21
// Training JS #6: Basic data types--Boolean and conditional statements if..else
function trueOrFalse(val) {
  if (val) return "true";
  else return "false";
}

// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
function accum(s) {
  let repeatS = s
    .toLowerCase()
    .split("")
    .map((letter, idx) => {
      return letter.repeat(idx + 1).replace(letter[0], letter[0].toUpperCase());
    });
  return repeatS.join("-");
}

// Tuesday 4/6/21
// Sum of Multiples
// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
function sumMul(n, m) {
  const mults = [];
  for (let i = 0; i < m; i += n) {
    mults.push(i);
  }
  return mults.length ? mults.reduce((acc, num) => acc + num, 0) : "INVALID";
}

// Fix the Bugs (Syntax) - My First Kata
// https://www.codewars.com/kata/56aed32a154d33a1f3000018/train/javascript
const myFirstKata = (a, b) =>
  typeof a !== "number" || typeof b !== "number" ? false : (a % b) + (b % a);

// Friday 4/9/21
// Find the Integral
// https://www.codewars.com/kata/59811fd8a070625d4c000013/train/javascript
function integrate(coefficient, exponent) {
  let exp = exponent + 1;
  let cof = coefficient / exp;
  return `${cof}x^${exp}`;
}

//Saturday 4/10/21
// Who ate the cookie?
// https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript
function cookie(x) {
  return `Who ate the last cookie? It was ${
    typeof x === "string"
      ? "Zach"
      : typeof x === "number"
      ? "Monica"
      : "the dog"
  }!`;
}
