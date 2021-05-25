// Sunday 5/23/21
// Simple Fun #74: Growing Plant (7kyu)
// https://www.codewars.com/kata/58941fec8afa3618c9000184/train/javascript
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 1
  let plantHeight = upSpeed

  while (plantHeight < desiredHeight) {
    plantHeight += upSpeed - downSpeed
    days++
  }
  return days
}

// Word values (7kyu)
// https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript
function wordValue(a) {
  const arr = []

  for (let i = 0; i < a.length; i++) {
    let wordSum = 0
    for (let j = 0; j < a[i].length; j++) {
      if (a[i].charCodeAt(j) - 96 >= 1) {
        wordSum += a[i].charCodeAt(j) - 96
      }
    }
    arr.push(wordSum * (i + 1))
  }
  return arr
}

const str = "Zebras have stripes. Cheetahs have spots."
let regex = /[a-c]/g

str.match(/[A-Z]/g) // [ 'Z', 'C' ]
str.match(regex) // [ 'b', 'a', 'a', 'a', 'a' ]
str.match(/[0-9]/g) // null

console.log(str.match(/[A-Z]/g)) // true
console.log(str.match(regex)) // true
console.log(str.match(/[0-9]/g)) // true

//
