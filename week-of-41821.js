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

// Saturday 4/24/21
// Template Strings
// https://www.codewars.com/kata/55a14f75ceda999ced000048/train/javascript
const TempleStrings = (obj, feature) => `${obj} are ${feature}`;

// Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

// Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string) {
  let arr = string.split(" ");
  let flip = arr.map((word) =>
    word.length > 4 ? word.split("").reverse().join("") : word
  );
  return flip.join(" ");
}

// Who likes it?
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length < 2) return `${names[0]} likes this`;
  if (names.length < 3) return `${names[0]} and ${names[1]} like this`;
  if (names.length < 4)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
