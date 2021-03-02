// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
function replace(s) {
  let noVowels = "";
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        noVowels += "!";
        break;
      default:
        noVowels += s[i];
        break;
    }
  }
  return noVowels;
}

// To square(root) or not to square(root)
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
function squareOrSquareRoot(array) {
  return array.map((num) =>
    num % Math.sqrt(num) === 0 ? Math.sqrt(num) : num ** 2
  );
}

// Cat years, Dog years
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript
const humanYearsCatYearsDogYears = function (humanYears) {
  const year1 = 15;
  const year2 = 24;

  if (humanYears === 1) return [humanYears, year1, year1];
  if (humanYears <= 2) return [humanYears, year2, year2];
  return [
    humanYears,
    year2 + 4 * (humanYears - 2),
    year2 + 5 * (humanYears - 2)
  ];
};
