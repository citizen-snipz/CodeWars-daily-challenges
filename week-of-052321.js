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

// Wednesday 5/26/21
// Chuck Norris VII - True or False? (Beginner)
// https://www.codewars.com/kata/570669d8cb7293a2d1001473/train/javascript
const ifChuckSaysSo = () => !true

const beginning = "               My cat loves my keyboard!"
const both = "       First tryyyy!         "
const end = "Loading...                           "

beginning.trim() // My cat loves my keyboard!
both.trim() // First tryyyy!
end.trim() // Loading...

// Saturday 5/29/21
// Alternate capitalization
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
function capitalize(s) {
  const index1 = s
    .split("")
    .map((el, idx) => (idx % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
  const index2 = s
    .split("")
    .map((el, idx) => (idx % 2 === 1 ? el.toUpperCase() : el.toLowerCase()))
  return [index1.join(""), index2.join("")]
}

//Greet Me (7kyu)
// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
const greet = (name) =>
  `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
