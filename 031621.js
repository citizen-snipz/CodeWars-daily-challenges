// repeatIt
// https://www.codewars.com/kata/557af9418895e44de7000053/train/javascript
var repeatIt = function (str, n) {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    if (typeof str === "string") {
      newStr += str;
    } else return "Not a string";
  }
  return newStr;
};
