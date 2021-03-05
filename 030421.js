// Color Ghost
// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript
var Ghost = function () {
  this.color = ["white", "yellow", "purple", "red"][
    Math.floor(Math.random() * 4)
  ];
};

// noobCode 01: SUPERSIZE ME.... or rather, this integer!
// https://www.codewars.com/kata/5709bdd2f088096786000008/train/javascript
function superSize(num) {
  let sorted = String(num)
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return +sorted;
}

// 5 without numbers !!
// https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript
function unusualFive() {
  const letters = ["a", "b", "c", "d", "e", "f"];
  return letters.indexOf("f");
}
