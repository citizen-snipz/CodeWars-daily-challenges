// Enumerable Magic #3 - Does My List Include This?
// https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/javascript
const include = (arr, item) => arr.includes(item);

// Remove First and Last Character Part Two
// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript
function array(arr) {
  return arr.split(",").length < 3
    ? null
    : arr.split(",").slice(1, -1).join(" ");
}

// Enumerable Magic #25 - Take the First N Elements
// https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript
function take(arr, n) {
  let elements = [];
  for (let i = 0; i < n; i++) {
    if (n > arr.length) {
      return arr;
    } else {
      elements.push(arr[i]);
    }
  }
  return elements;
}
