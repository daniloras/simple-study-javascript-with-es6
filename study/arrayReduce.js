/*
reduce
*/

const arrReduce = [1, 2, 4, 5, 8, 9];

const newReduce = arrReduce.reduce(function (total, next) {
  return total + next;
});

console.log(newReduce);
