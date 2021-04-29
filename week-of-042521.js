// Sunday 4/25/21
// Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(n) {
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
}

// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function DNAStrand(dna) {
  let swap = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  return `${dna
    .split("")
    .map((letter) => swap[letter])
    .join("")}`;
}

// Monday 4/26/21
// Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
// return masked string
function maskify(cc) {
  if (cc.length < 5) return cc;
  return "#".repeat(cc.length - 4) + cc.slice(-4);
}

// Tuesday 4/27/21
// String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
function solution(str, ending) {
  return str.endsWith(ending);
}

// Wednesday 4/28/21
// Age Range Compatibility Equation
// https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/javascript
function datingRange(age) {
  let min = age < 15 ? Math.floor(age - 0.1 * age) : Math.floor(age / 2 + 7);
  let max = age < 15 ? Math.floor(age + 0.1 * age) : Math.floor((age - 7) * 2);
  return `${min}-${max}`;
}
