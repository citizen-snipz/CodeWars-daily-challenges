// Sunday 4/18/21
// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
function XO(str) {
  let x = str.split("").filter((letter) => letter === "x" || letter === "X");
  let o = str.split("").filter((letter) => letter === "o" || letter === "O");
  return x.length === o.length;
}
