// Holiday VI - Shark Pontoon
// https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let distanceCalc = sharkDistance / sharkSpeed > pontoonDistance / youSpeed;
  let dolph = sharkDistance / (sharkSpeed / 2) > pontoonDistance / youSpeed;
  if (dolphin) return dolph ? "Alive!" : "Shark Bait!";
  else return distanceCalc ? "Alive!" : "Shark Bait!";
}

// How old will I be in 2099?
// https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
function calculateAge(born, year) {
  if (born < year) {
    return `You are ${year - born} year${year - born == 1 ? "" : "s"} old.`;
  } else if (born > year) {
    return `You will be born in ${born - year} year${
      born - year == 1 ? "" : "s"
    }.`;
  } else return `You were born this very year!`;
}
