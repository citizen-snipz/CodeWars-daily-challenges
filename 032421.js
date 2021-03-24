// Miles per gallon to kilometers per liter
// https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript
function converter(mpg) {
  return +((1.609344 / 4.54609188) * mpg).toFixed(2);
}

// Parse float
// https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript
function parseF(s) {
  return isFinite(s) && s !== true && s !== false ? +s : null;
}
