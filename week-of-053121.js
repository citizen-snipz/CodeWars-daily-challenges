// Monday 5/31/21
// Find the next perfect square! (7kyu)
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) ** 2 : -1
}
