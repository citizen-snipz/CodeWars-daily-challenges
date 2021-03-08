// Vowel remover
// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
function shortcut(string) {
  let noVowels = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      noVowels += "";
    } else {
      noVowels += string[i];
    }
  }
  return noVowels;
}

// Thinkful - Number Drills: Pixelart planning
// https://www.codewars.com/kata/58630e2ae88af44d2b0000ea/train/javascript
const isDivisible = (wallLength, pixelSize) => wallLength % pixelSize === 0;

// Exclamation marks series #1: Remove a exclamation mark from the end of string
// https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
function remove(s) {
  return s.endsWith("!") ? s.slice(0, -1) : s;
}
