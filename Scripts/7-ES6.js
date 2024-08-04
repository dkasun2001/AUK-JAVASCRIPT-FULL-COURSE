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

//---------------------------------------------------- 

let newObj = obj;

console.log(`obj value:`,obj);
console.log(`newObj value:`,newObj);

obj.city = "Colombo";

console.log(`Updated obj:`,obj);
console.log(`newObj value:`, newObj);
