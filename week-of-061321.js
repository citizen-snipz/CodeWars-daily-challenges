// Monday 6/14/21
// Sum of a sequence
// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
const sequenceSum = (begin, end, step) => {
  let count = 0
  if (begin > end) {
    return 0
  } else {
    for (let i = begin; i <= end; i += step) {
      count += i
    }
    return count
  }
}

// Wednesday 6/16/21
// Growth of a Population (7kyu)
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(population, percent, newPeople, target) {
  let years = 0
  let pop = population

  while (pop < target) {
    years++
    pop = pop + (pop * percent) / 100 + newPeople
  }

  return years
}

//ES6 string addition (8kyu)
// https://www.codewars.com/kata/582e4c3406e37fcc770001ad/train/javascript
function joinStrings(string1, string2) {
  return `${string1} ${string2}`
}

// Thursday 6/17/21
// Simple Comparison?
// https://www.codewars.com/kata/57f6ecdfcca6e045d2001207/train/javascript
function add(a, b) {
  return a == b
}
