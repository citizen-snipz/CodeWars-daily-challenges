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

//Wednesday 6/16/21
