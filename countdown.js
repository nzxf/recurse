const countdown = (startFrom) => {
  console.log(startFrom);
  // BASE CASE
  if (startFrom === 0) {
    return startFrom;
  }
  //RECURSION CASE
  return countdown(startFrom - 1);
};

countdown(10);

const countDown = (startNum) => {
  console.log(startNum);
  let nextNum = startNum - 1;
  // BASE CASE
  if (nextNum >= 0) {
    // RECURSION CASE
    countDown(nextNum);
  }
};

countDown(10)
