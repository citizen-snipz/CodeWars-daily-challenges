//Simple Fun #1: Seats in Theater
// https://www.codewars.com/kata/588417e576933b0ec9000045/train/javascript
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}

// Dollars and Cents
// https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript
const formatMoney = (amount) => `$${amount.toFixed(2)}`;
