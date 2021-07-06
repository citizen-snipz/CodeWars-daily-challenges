// Monday 7/5/21
// CamelCase Method (6 kyu)
// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
String.prototype.camelCase = function () {
  return this.length > 0
    ? this.trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join("")
    : ""
}
