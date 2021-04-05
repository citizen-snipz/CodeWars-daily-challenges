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
