const exponential = (num, power) => {
  // BASE CASE
  if (power == 1) {
    return num
  }
  // RECURSION CASE
  return num * exponential(num, power - 1);
};

console.log(exponential(3,4))
