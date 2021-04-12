// Sunday 4/11/21
// Find the Slope
function slope(points) {
  return points[2] - points[0] === 0
    ? "undefined"
    : String((points[3] - points[1]) / (points[2] - points[0]));
}

// Man in the west
// https://www.codewars.com/kata/59bd5dc270a3b7350c00008b/train/javascript
const checkTheBucket = (bucket) => bucket.includes("gold");

// Monday 4/12/21
// Training JS #10: loop statement --for
// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}
