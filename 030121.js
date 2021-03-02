// A wolf in sheep's clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/solutions/javascript
function warnTheSheep(queue) {
  let wolf = queue.indexOf("wolf");
  let revArr = queue.reverse();
  if (wolf === queue.length - 1) return "Pls go away and stop eating my sheep";
  else
    return `Oi! Sheep number ${revArr.indexOf(
      "wolf"
    )}! You are about to be eaten by a wolf!`;
}

// Holiday VIII - Duty Free
// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
function dutyFree(normPrice, discount, hol) {
  let savings = normPrice - normPrice * (discount / 100);
  return Math.trunc(hol / (normPrice - savings));
}

// Grasshopper - Terminal game combat function
// https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript
function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}

// 101 Dalmatians - squash the bugs, not the dogs!
// https://www.codewars.com/kata/56f6919a6b88de18ff000b36/train/javascript
function howManyDalmatians(number) {
  const dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!"
  ];

  return number <= 10
    ? dogs[0]
    : number <= 50
    ? dogs[1]
    : number === 101
    ? dogs[3]
    : dogs[2];
}

// Drink about
// https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript
function peopleWithAgeDrink(old) {
  return old < 14
    ? "drink toddy"
    : old < 18
    ? "drink coke"
    : old < 21
    ? "drink beer"
    : "drink whisky";
}
