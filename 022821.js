// Grasshopper - Terminal game move function
// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript
function move(position, roll) {
  return position + roll * 2;
}

// L1: Bartender, drinks!
// https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript
function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
      break;
    case "school counselor":
      return "Anything with Alcohol";
      break;
    case "programmer":
      return "Hipster Craft Beer";
      break;
    case "bike gang member":
      return "Moonshine";
      break;
    case "politician":
      return "Your tax dollars";
      break;
    case "rapper":
      return "Cristal";
      break;
    default:
      return "Beer";
  }
}
