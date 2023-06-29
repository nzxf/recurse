const fibs = (num, result = []) => {
  for (let index = 0; index < num; index++) {
    if (index < 2) {
      result.push(index);
    } else {
      result.push(result[index - 1] + result[index - 2]);
    }
  }
  return result;
};

console.log(fibs(8));

const fibsRec = (num) => {
  // BASE CASE
  if (num <= 0) return "Can't do zero or negative number";
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  // RECURSION CASE
  let result = fibsRec(num - 1);
  result.push(result[num - 2] + result[num - 3]);
  return result;
};
console.log(fibsRec(8));
