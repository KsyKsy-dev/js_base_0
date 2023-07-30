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
// let leader = {
//   step: 0,
//   up() {
//     leader.step++;
//     console.log(leader.step);
//     console.log(leader.up);
//     return this;
//   },
// };
// console.log(leader.up().up());
// console.log(leader.up);

//NEW functions new and without new

// function User() {
//   console.log(new.target);
// }

// new User();
// User();

// return in constructors
// function User(name) {
//   this.name = name;
//   return { name: "Big" };
// }
// console.log(new User(name));

// return in constractors are returning this

// function User(name) {
//   this.name = "Chichi";
//   return;
// }
// console.log(new User().name);
