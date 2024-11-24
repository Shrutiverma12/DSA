const inputArray = [1, 2, 2, 3, 4, 4, 5];

//1-filter
const uniqueArray = inputArray.filter(
  (item, index) => inputArray.indexOf(item) == index
);

console.log(uniqueArray);

//2-set
const uniqueArray1 = [...new Set(inputArray)];

console.log(uniqueArray1);

//3-forEach
const uniqueArray2 = [];

inputArray.forEach((item) => {
  if (!uniqueArray2.includes(item)) {
    uniqueArray2.push(item);
  }
});
console.log(uniqueArray2);

//4-reduse
const uniqueArray3 = inputArray.reduce((acc, currentVal) => {
  if (!acc.includes(currentVal)) {
    acc.push(currentVal);
  }
  return acc;
}, []);

console.log(uniqueArray3);
