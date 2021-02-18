//Stringy Strings 2/16/21
//https://www.codewars.com/kata/563b74ddd19a3ad462000054
function stringy(size) {
  let arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push(i % 2);
  }
  return arr.join("");
}

//I love you, a little , a lot, passionately ... not at all
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
const responses = [
  "not at all",
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly"
];

const howMuchILoveYou = (n) => responses[n % 6];
