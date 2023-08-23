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

//methods in constractors
// function User(name) {
//   this.name = name;
//   this.speak = function () {
//     console.log("may name is " + this.name);
//   };
// }
// let baby = new User("baby");
// baby.speak();

// // comipire two constrators
// let o = {};
// function A() {
//   return o;
// }
// function B() {
//   return o;
// }

// console.log(new A() === new B());

//constractor calculator

// function Calc(a, b) {
//   this.a = a;
//   this.b = b;
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.sub = function () {
//     return this.a - this.b;
//   };
// }
// console.log(new Calc(2, 1).sub());

// constraxtor accomulator

// function Acomulator() {
//   this.value = 0;
//   this.add = function () {
//     this.value += +prompt("0", 0);
//   };
// }
// let accomulator = new Acomulator();
// accomulator.add();
// accomulator.add();

// console.log(accomulator.value);

// optional chaining

// let user = {};
// console.log(user.name ? user.name.adress : undefined);

// let html = document.querySelector("div");
// console.log(html.innerHTML);
// optional chining functiins

// let f = {
//   m() {
//     console.log(1);
//   },
// };
// let f1 = {};
// f.m?.();
// f1.m?.();

// // optional chining objects square brackets
// let key = "firstname";
// let user = {
//   firstname: "j",
// };
// let user2 = {};

// console.log(user?.[key], user2?.[key]);

// Symbols

let user = {
  name: "John",
};
let id = Symbol("id");
console.log(typeof id);
console.log(id);
console.log(user[id]);
console.log(id.toString());
console.log(id.description);
