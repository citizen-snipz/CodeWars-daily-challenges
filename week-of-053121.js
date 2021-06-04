// Monday 5/31/21
// Find the next perfect square! (7kyu)
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) ** 2 : -1
}

// Printer Errors (7kyu)
// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
function printerError(s) {
  let errors = "nopqrstuvwxyz".split("")
  const wrongLetters = s.split("").filter((letter) => errors.includes(letter))
  return `${wrongLetters.length}/${s.length}`
}

// Thursday 6/9/21
// Caffeine Script (7kyu)
// https://www.codewars.com/kata/5434283682b0fdb0420000e6/train/javascript
function caffeineBuzz(n) {
  let even = n % 2 === 0
  if (n % 3 === 0 && n % 4 === 0 && even) return "CoffeeScript"
  if (n % 3 === 0 && even) return "JavaScript"
  if (n % 3 === 0 && n % 4 === 0) return "Coffee"
  if (n % 3 === 0) return "Java"
  return "mocha_missing!"
}
