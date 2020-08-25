/**
 * values default functions
 */

function total(a = 3, b = 8) {
  return a + b;
}

console.log(total(3));

// exemple with arrow functions

const totalArrow = (a = 3, b = 6) => a + b;

console.log(totalArrow());
