/*
map
*/

const arrMap = [1, 2, 4, 5, 8, 9];

const newMap = arrMap.map(function (item, index) {
  return item + index;
});

console.log(newMap); // [1, 3, 6, 8, 12, 14]
