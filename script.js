"use strict";

//Object's method pre declared

// let user = {};
// function sey() {
//   console.log("Say hi!");
// }
// user.sey = sey;
// user.sey();

// let user = {
//   name: "2",
//   say() {
//     console.log("name");
//   },
// };
// user.say();

//this function
// let arr = { name: "arr" };
// let arr1 = { name: "arr1" };

// function testThis() {
//   console.log(this.name);
// }
// arr.f = testThis;
// arr1.f = testThis;
// arr.f(this.name);
// arr1.f(this.name);

//calcultor objects  method

// let calc = {
//   read() {
//     (this.a = 10), (this.b = 2);
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return a * b;
//   },
// };
// console.log(calc.add());

// leadder
let leader = {
  step: 0,
  up() {
    this.step++;
    console.log(this.step);
    console.log(leader);
    return leader;
  },
};
leader.up().up();
