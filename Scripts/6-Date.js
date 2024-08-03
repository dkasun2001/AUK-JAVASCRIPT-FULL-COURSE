let today = new Date();
console.log(today.toString().split(" ")[4]);

console.log(
  today.getDate(),
  today.getMonth(),
  today.getFullYear(),
  today.getHours(),
  today.getMinutes(),
  today.getSeconds(),
  today.getDay()
);

console.log(today.getTime());
console.log("");

let today1 = new Date();
today1.setDate(3);
today1.setMonth(7);
today1.setHours(22);
console.log(today1);
