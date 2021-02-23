//Simple Fun #1: Seats in Theater
// https://www.codewars.com/kata/588417e576933b0ec9000045/train/javascript
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}

// Dollars and Cents
// https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript
const formatMoney = (amount) => `$${amount.toFixed(2)}`;

// Filter out the geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((bird) => !geese.includes(bird));
}

//Sort and Star
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
function twoSort(s) {
  s.sort();
  return s[0].split("").join("***");
}

//Hello, Name or World!
// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
function hello(name) {
  if (name === "" || !name) {
    return "Hello, World!";
  } else {
    let formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${formattedName}!`;
  }
}
