// Check the exam
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript
function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] == "") {
      score += 0;
    } else if (array1[i] === array2[i]) {
      score += 4;
    } else {
      score -= 1;
    }
  }
  return score > 0 ? score : 0;
}

// Student's Final Grade
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  else if (exam > 75 && projects >= 5) return 90;
  else if (exam > 50 && projects >= 2) return 75;
  else return 0;
}

//Get Nth Even Number
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => Math.floor(n * 2) - 2;

// Is this my tail?
// https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript
function correctTail(bod, tail) {
  let sub = bod.substr(bod.length - tail.length);

  if (sub == tail) return true;
  else return false;
}
