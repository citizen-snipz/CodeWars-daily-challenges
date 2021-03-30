// Sun 3-28-21
// Leonardo Dicaprio and Oscars
//https://www.codewars.com/kata/56d49587df52101de70011e4/train/javascript
function leo(oscar) {
  if (oscar === 88) return "Leo finally won the oscar! Leo is happy";
  if (oscar === 86) return "Not even for Wolf of wallstreet?!";
  if (oscar < 88) return "When will you give Leo an Oscar?";
  else return "Leo got one already!";
}

//Mon 3-29-21
// Multiple of index
// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript
function multipleOfIndex(array) {
  return array.filter((num, idx) => num % idx === 0);
}

// "this" is a problem
// https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}

// String Templates - Bug Fixing #5
// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/javascript
function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}
