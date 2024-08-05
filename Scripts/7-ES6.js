//---------------------------------------------------- Array Destucture

let arr = ["Amila", "Upul", "Kumara", 23, true];

const [fName, mName, lName, age] = arr;

console.log(fName);

//---------------------------------------------------- Object Destucture

let obj = {
  name: "Dinusha Kasun Heenatiyangala",
  age: 23,
  address: {
    address1: "Asgiriya",
    address2: "Kandy",
  },
};

const {
  name,
  address: { address1 },
} = obj;
console.log(name, address1);

//---------------------------------------------------- Spread Oparetors

let newObj = {
  ...obj,
  a() {
    console.log("I'm Function");
  },
  printYourName(yname) {
    console.log(yname);
  },
};

console.log(`obj value:`, obj);
console.log(`newObj value:`, newObj.printYourName("kaasun"));

obj.city = "Colombo";

console.log(`Updated obj:`, obj);
console.log(`newObj value:`, newObj);

let newArr = [...arr];
console.log(arr);
console.log(newArr);

arr.push(7);
console.log(arr);
console.log(newArr);
