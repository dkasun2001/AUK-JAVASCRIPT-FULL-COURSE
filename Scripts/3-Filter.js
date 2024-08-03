let arr = [1, 2, 3, 4, 5, 6];

/* let result = arr.filter((el) => el % 2 == 1);
console.log(result); */

let result = arr.filter((el) => el % 2 == 1).map((el) => el + 6);
console.log(result);
