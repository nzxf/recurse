let text = 'nzxf';
let anotherText = 'flabbergasted';

const stringRev = (string) => {
  // BASE CASE
  if (string.length === 1) {
    return string;
  }
  // RECURSION CASE
  return (
    string.slice(string.length - 1) +
    stringRev(string.slice(0, string.length - 1))
  );
};

console.log(stringRev(text));
console.log(stringRev(anotherText));
