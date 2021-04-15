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

// Tuesday 4/13/21
// Evil or Odious
// https://www.codewars.com/kata/56fcfad9c7e1fa2472000034/train/javascript
function evil(n) {
  let str = n
    .toString(2)
    .split("")
    .filter((num) => num === "1");
  return str.length % 2 === 0 ? "It's Evil!" : "It's Odious!";
}

// Letterbox Paint-Squad
// https://www.codewars.com/kata/597d75744f4190857a00008d/train/javascript
var paintLetterboxes = function (start, end) {
  const tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = start; i <= end; i++) {
    String(i)
      .split("")
      .forEach((num) => tracker[num]++);
  }
  return tracker;
};

// Wednesday 4/14/21
// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/javascript
function remove(s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "!") {
      str += "";
    } else {
      str += s[i];
    }
  }
  return `${str}!`;
}

// Do you speak "English"?
// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript
const spEng = (sentence) => sentence.toLowerCase().includes("english");
