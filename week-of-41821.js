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
