/*
filter
*/

const arrFilter = [1, 2, 4, 5, 8, 9];

const newFilter = arrFilter.filter(function (item) {
  return item % 2 === 0;
});

console.log(newFilter);
