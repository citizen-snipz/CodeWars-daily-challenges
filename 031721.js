// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
// https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript
function remove(s, n) {
  let markCount = "";
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "!" && markCount.length < n) {
      markCount += s[i];
    } else {
      str += s[i];
    }
  }
  return str;
}

// Take the Derivative
// https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript
const derive = (coefficient, exponent) =>
  `${coefficient * exponent}x^${exponent - 1}`;

// Is it a palindrome?
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
function isPalindrome(x) {
  let y = x.toLowerCase();
  return y === y.split("").reverse().join("");
}
