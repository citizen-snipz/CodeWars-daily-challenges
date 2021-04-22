// Sunday 4/18/21
// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
function XO(str) {
  let x = str.split("").filter((letter) => letter === "x" || letter === "X");
  let o = str.split("").filter((letter) => letter === "o" || letter === "O");
  return x.length === o.length;
}

// Monday 4/19/21
// Fuel Calculator
// https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript
function fuelPrice(litres, pricePerLitre) {
  let discount = {
    1: 0.0,
    2: 0.05,
    3: 0.05,
    4: 0.1,
    5: 0.1,
    6: 0.15,
    7: 0.15,
    8: 0.2,
    9: 0.2
  };
  let cost = litres * pricePerLitre;
  let finalCost = cost - litres * discount[litres] || cost - litres * 0.25;
  return +finalCost.toFixed(2);
}

// Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n) {
  let sorted = Array.from(n.toString())
    .sort((a, b) => b - a)
    .join("");
  return +sorted;
}

// Wednesday 4/21/21
// Switch/Case - Bug Fixing #6
// https://www.codewars.com/kata/55c933c115a8c426ac000082/train/javascript
function evalObject(value) {
  const { a, b, operation } = value;
  var result = 0;
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
    case "%":
      result = a % b;
      break;
    case "^":
      result = Math.pow(a, b);
      break;
  }
  return result;
}

// UEFA EURO 2016
// https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
function uefaEuro2016(teams, scores) {
  return scores[0] > scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    : scores[0] < scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    : `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
}

// Thursday 4/22/21
// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
function isIsogram(str) {
  let singles = new Set(str.toLowerCase());
  if (str === "" || str.length === singles.size) return true;
  return false;
}
