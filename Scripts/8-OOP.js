class Person {
  static name = "Dinusha";
  constructor(name, age, pNumber) {
    this.name = name;
    this.age = age;
    this.pNumber = pNumber;
    this.city = "Kandy";
  }

  displayName() {
    console.log(`Your name is ${this.name}`);
    return this;
  }

  displayAge() {
    console.log(`Your age is ${this.age}`);
    return this;
  }

  displayPnumber() {
    console.log(`Your Phone Number is ${this.pNumber}`);
    return this;
  }
}

class Mod extends Person {
  type = "mod";
  id;

  constructor(name, age, pNumber, id) {
    super(name, age, pNumber);
    this.name = `Hi ${name}`;
    this.id = id;
  }

  deleteUser(user) {
    users = users.filter((e) => e.pNumber != user.pNumber);
  }

  displayName() {
    console.log(`Your name is ${this.name} as Mod`);
    return this;
  }
}

const person1 = new Person("Dinusha", 23, 23542);
const person2 = new Person("Kasun", 22, 135345);
const person3 = new Person("Upul", 27, 43534);

let users = [person1, person3, person3];

console.log(person1.name);
person2.displayName();
console.log(Person.name);

console.log(users);

const mod1 = new Mod("Kasun", 45, 5464);
mod1.displayName().displayAge().displayPnumber();

// mod1.deleteUser(person1);
// console.log(users);
