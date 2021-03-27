//Grasshopper - Combine strings
// https://www.codewars.com/kata/55f73f66d160f1f1db000059/train/javascript
const combineNames = (fn, ln) => `${fn} ${ln}`;

// A Strange Trip to the Market
// https://www.codewars.com/kata/55ccdf1512938ce3ac000056/train/javascript
function isLockNessMonster(s) {
  return (
    s.includes("tree fiddy") || s.includes("three fifty") || s.includes("3.50")
  );
}

// Barking mad
// https://www.codewars.com/kata/54dba07f03e88a4cec000caf/train/javascript
function Dog(breed) {
  this.breed = breed;
}

const snoopy = new Dog("Beagle");

snoopy.bark = function () {
  return "Woof";
};

const scoobydoo = new Dog("Great Dane");

scoobydoo.bark = function () {
  return "Woof";
};
