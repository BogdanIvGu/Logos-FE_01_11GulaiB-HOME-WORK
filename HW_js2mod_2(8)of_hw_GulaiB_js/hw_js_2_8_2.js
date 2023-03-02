                            // // Перша задача

/ // // Перша задача

// let person = {};
// person.firstName = "Ivan";
// person.secondName = "Ivanov";
// person.showData = function () {
//   console.log(this.firstName + " " + this.secondName);
// };
// let newPerson = Object.assign({}, person);
// newPerson.firstName = "Petro";
// newPerson.secondName = "Petriv";
// console.log(person.showData());
// console.log(newPerson.showData());

// // Друга  задача

let MyMath = {};
MyMath.a = 5;
MyMath.b = 2;
MyMath.sum = function () {
  console.log(this.a + this.b);
};
MyMath.multiplication = function () {
  console.log(this.a * this.b);
};
MyMath.division = function () {
  console.log(this.a / this.b);
};
MyMath.subtraction = function () {
  console.log(this.a - this.b);
};
console.log(MyMath.sum());
console.log(MyMath.multiplication());
console.log(MyMath.division());
console.log(MyMath.subtraction());
