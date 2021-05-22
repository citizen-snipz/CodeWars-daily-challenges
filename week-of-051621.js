// Sunday 5/16/21
// Friend or Foe?
// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}

// Thursday 5/20/21
// Anagram Detection
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
// write the function isAnagram
const isAnagram = function (test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};

// Saturday 5/22/21
// Find the capitals
// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
var capitals = function (word) {
  let index = [];
  let filtered = word.split("").filter((letter, idx) => {
    if (letter === letter.toUpperCase()) index.push(idx);
  });
  return index;
};

// Remove anchor from URL
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

function removeUrlAnchor(url) {
  let anchor = url.indexOf("#");

  return url.includes("#") ? url.slice(0, anchor) : url;
}
