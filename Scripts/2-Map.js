let obj = [
  {
    name: "Kasun",
    age: 23,
    city: "colombo",
  },
  {
    name: "Nimal",
    age: 20,
    city: "Kandy",
  },
  {
    name: "Upul",
    age: 25,
    city: "Matale",
  },
];

console.log(obj);

let result = obj.map((value, index) => ({
  name: value.name,
  age: value.age,
}));

console.log(result);
