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
