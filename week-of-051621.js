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
