// Surface Area and Volume of a Box
// https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript
function getSize(w, h, d) {
  const areaVol = [];
  areaVol.push(w * h * 2 + w * d * 2 + h * d * 2);
  areaVol.push(w * h * d);
  return areaVol;
}

// Grasshopper - Debug
// https://www.codewars.com/kata/55cb854deb36f11f130000e1/train/javascript
function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c < 0) return c + " is freezing temperature";
  else return c + " is above freezing temperature";
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}

// Thinkful - Logic Drills: Traffic light
// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
function updateLight(current) {
  return current === "red" ? "green" : current === "green" ? "yellow" : "red";
}

// Well of Ideas - Easy Version
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
function well(x) {
  let numOfGoods = x.filter((el) => el.includes("good"));
  return numOfGoods.length > 2
    ? "I smell a series!"
    : numOfGoods.length > 0
    ? "Publish!"
    : "Fail!";
}
