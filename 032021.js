// Return the day
// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript
function whatday(num) {
  const days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
  };

  return days[num] || "Wrong, please enter a number between 1 and 7";
}

// FIXME: Replace all dots
// https://www.codewars.com/kata/596c6eb85b0f515834000049/train/javascript
const replaceDots = (str) => str.split(".").join("-");
