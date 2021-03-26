// Grader
// https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/train/javascript
function grader(score) {
  return score > 1 || score < 0.6
    ? "F"
    : score >= 0.9
    ? "A"
    : score >= 0.8
    ? "B"
    : score >= 0.7
    ? "C"
    : score >= 0.6
    ? "D"
    : "invalid entry";
}

// Alan Partridge II - Apple Turnover
// https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/javascript
function apple(x) {
  return x ** 2 > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}
