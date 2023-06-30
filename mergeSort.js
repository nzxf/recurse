const splitter = (arr) => {
  // MIDDLE INDEX
  const half = Math.round(arr.length / 2);
  // SPLIT
  const left = arr.slice(0, half);
  const right = arr.slice(half);
  return [left, right];
};

const merger = (leftArr, rightArr) => {
  let result = [];
  let left = 0;
  let right = 0;

  while (left < leftArr.length && right < rightArr.length) {
    if (leftArr[left] < rightArr[right]) {
      result.push(leftArr[left]);
      left += 1;
    } else {
      result.push(rightArr[right]);
      right += 1;
    }
  }
  return result.concat(leftArr.slice(left).concat(rightArr.slice(right)));
};

const mergeSort = (arr) => {
  // BASE CASE
  if (arr.length == 1) {
    return arr;
  }
  // SPLIT
  const splittedArr = splitter(arr);
  // RECURSION CASE
  const left = mergeSort(splittedArr[0]);
  const right = mergeSort(splittedArr[1]);
  //MERGE
  return merger(left, right);
};


const nums = [9, 7, 1, 3, 5];
const anotherNums = [34,72,83,23,46,9,12,137]
console.log(mergeSort(nums));
console.log(mergeSort(anotherNums))
