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
