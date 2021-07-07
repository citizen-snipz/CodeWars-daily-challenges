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

// Tuesday 7/6/21
// Remove duplicate words (7kyu)
//https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
function removeDuplicateWords(s) {
  let sArr = s.split(" ")
  return [...new Set(sArr)].join(" ")
}

//CSV representation of array
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript
function toCsvText(array) {
  //let text = array.map((line, i) => i === array.length - 1 ? line : line + '\n')
  const text = array.join("\n")
  return `${text}`
}

// Wednesday 7/7/21
// Most digits (7kyu)
// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
function findLongest(array) {
  let length = "1"
  const string = array.map((num) => num.toString())
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > length.length) {
      length = string[i]
    }
  }
  const filtered = string.filter((num) => num.length == length.length)
  return +filtered[0]
}
