// console.log("first")

// -----------------------------------------Get User Inputs

/* let yname = prompt("Enter your name","Kasun");
console.log(yname); */

/* let yname = confirm("Are you Kasun ?");
console.log(yname); */

// ----------------------------------------- Error

/* console.error('This is an error ')
console.warn("This is an warn "); */

// ----------------------------------------- Object

/* let a = {
  name: "Kasun",
  age: 23,
  city: "Kandy",
};
let b = {
  name: "Upul",
  age: 44,
  city: "Matale",
};
let c = {
  name: "Amal",
  age: 29,
  city: "Kegall",
};

// console.log(a);
// console.log(b);
// console.log(c);


// console.log({ a, b, c });
console.table({ a, b, c }); */

// ----------------------------------------- Data types

/* let a = "Dinusha Kasun Heenatiyangala"; //String
let b = 23; // number
let c = true; //boolean
let d = 234n; //bigint
let e; //undefind
let f = null; //object

console.log(typeof a)
console.log(typeof (b))
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f) */

// ----------------------------------------- Convert Data types

/* let a = "Dinusha Kasun Heenatiyangala"; //String
let b = 23; // number
let c = true; // boolean
let d = 234n; // bigint
let e; // undefind
let f = null; // object
let g = "12.322ddd";

// b = String(b);
// console.log(typeof b);

// c = String(c);
// console.log(c);

// d = String(d);
// console.log(d);

// e = String(e);
// console.log(e);

// f = String(f);
// console.log(f);

// console.log(Number(c));

// console.log(Number(f));

console.log(parseInt(d));

console.log(parseFloat(g)); */

// ----------------------------------------- Unary

/* let a = -2;
console.log(a); */

// ----------------------------------------- binary

/* let b = -2 + 5;
console.log(b);
 */

// ----------------------------------------- String methods

/* let a = "Dinusha Kasun Heenatiyangala";
// console.log(a.substring(2, 6));

// console.log(a.split("a"));

// console.log(a.lastIndexOf("D"));

// console.log(a.charAt("12"));

// console.log(a.endsWith("a"));

// console.log(a.replace("Kasun","Diu")); 

//console.log(a.length); */

// ----------------------------------------- Arrays

// let d = ["Kasun", 12, 21, true, [1, 2, 3], 3.7];

// console.log(d.length)

// console.log(d[4][1])

// console.log(d.lastIndexOf(21))

// console.log(d.reverse());

// let a = "Dinusha Kasun Heenatiyangala".split(" ");
/*
console.log(a);
a[1] = "din";
console.log(d.concat(a));
 */

/* a.unshift("unshift");
a.push("push");
console.log(a);

a.shift()
console.log(a);

a.pop();
console.log(a); */

// ----------------------------------------- Object

/* let a = {
  name: "Dinusha Kasun",
  age: 23,
  canFly: true,
  languages: ["java", "javascript", "c", "c++"],
  city: {
    address1: "Kadugnnawa",
    address2: "Matale",
  },
};
console.log(a["city"]["address1"]);

a.clss = "Javascript full course";
console.log(a) */

// ----------------------------------------- Function

/* function displayName(name, age) {
  let clz = prompt("Enter your class?");
  console.log(`Your name is ${name} and you are ${age} `);

  return age;
}

console.log(displayName("Kasun", 23, "js"));
console.log(displayName("Dinu", 26, "php"));
console.log(displayName("Kasun", 23, "js", "java"));

let displayName1= function( ){

} */

// ----------------------------------------- Arrow Function

/* let newFun = (name) => {
  console.log(name);
};
 newFun("DK") */

// ----------------------------------------- Comparison Operators

/* let a = 5,
  b = 6;
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b); */

// ----------------------------------------- conditional statement
// ----------------------------------------- If else

/* let marks = 50;

if (marks > 75) {
  console.log("A");
} else if (marks > 65) {
  console.log("B");
} else if (marks > 55) {
  console.log("C");
} else if (marks > 35) {
  console.log("S");
} else {
  console.log("Fail");
}
  */

/* let marks = 50;
marks > 75
  ? console.log("A")
  : marks > 65
  ? console.log("B")
  : marks > 55
  ? console.log("C")
  : marks > 35
  ? console.log("S")
  : console.log("Fail");
 */

// ----------------------------------------- switch

/* let a = 5;
switch (a) {
  case 1:
    {
      console.log("Jan");
    }
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
  case 5:
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  default:
    break;
}
 */

// ----------------------------------------- For loop

/* for (let i = 1; i <= 100; i++) {
  console.log(i);
} */

/* let i = 1;
console.log(i);
console.log(++i);
console.log(i++); // Post increment */

// ----------------------------------------- while

/* let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}
 */

// ----------------------------------------- do while

/* let a = 1;
do {
console.log(a)
  a++
} while (a<=10); */
