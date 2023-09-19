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

// let user = {
//   name: "John",
// };
// let id = Symbol("id");
// console.log(typeof id);
// console.log(id);
// console.log(user[id]);
// console.log(id.toString());
// console.log(id.description);

// symbol on the object has to be wrapped in square brackets
// let id = Symbol("id");
// let user = {
//   1: "0",
//   u: 3,
//   [id]: 123,
// };
// let i = 1;
// console.log(user[id]);
// for (let key in user) {
//   console.log("sircle " + i++, user[key], user[id], user);
// }

// cloning Symbul added to object

// let id = Symbol("check");

// let user = {
//   iq: 0,
//   state: "-",
//   [id]: "no info",
// };
// let clone = Object.assign({}, user);

// console.log(clone[id]);

// global symbul regidtry

// let id = Symbol.for("id");

// let id2 = Symbol.for("id");
// console.log(id === id2);

//Symbol keyFor(key) returns a symbol name
// console.log(Symbol.keyFor(id));

// object to primitive

// let ob = { a: 1, b: 2 };
// let ob0 = { a: 2, b: 3 };
// console.log(ob, ob0);
// console.log(ob + ob0);
// console.log(Number(ob));
// console.log(++ob);

// console.log(true == ob);
// console.log(ob < ob0);
// console.log(ob, ob0);

// let obj = {
//   valueOf: function () {
//     return 23;
//   },
//   toString: function () {
//     return "st";
//   },
// };
// console.log(Number(obj));
// console.log(String(obj));
//Symbol to primitive method

// let objToSmbl = {
//   value: 22,
//   str: "mstr",
//   [Symbol.toPrimitive](hint) {
//     console.log(hint, `{hint}`);
//     return hint == "number" ? `{str:&{this.str}}` : this.value;
//   },
// };
// console.log(Number(objToSmbl));
// console.log(String(objToSmbl));
// console.log(objToSmbl + 1);

// let myob = { user: "name" };
//console.log(myob);

// let obj = {
//   toString() {
//     return "2";
//   },
// };
// console.log(2 + obj);

// explicit type conversion

// let num = 42;
// let grit = "sat";
// console.log(num + grit);

// object type convertion method typeOf();
// let obj = {
//   valueOf() {
//     return 44;
//   },
// };

// console.log(obj - 1);
// let obj = {
//   str: "str",
//   num: 2,
//   [Symbol.toPrimitive](h) {
//     console.log(`h: ${h}`);
//     return h == "string" ? `str:"${this.str}"` : this.num;
//   },
// };
// console.log(Number(obj));
// console.log(String(obj));

//methods of primitives

// let grit = "hey";
// console.log(grit.toUpperCase());

// let num = 1.234353;

// console.log(num.toFixed(2));
//using of constartors(strin, numbeer, boolean) isunceromended

// let zero = 0;
// let zero1 = new Number(0);
// console.log(typeof 0);
// console.log(typeof zero1);

// if (zero) {
//   console.log("zero is falsy");
// } else {
//   console.log("zero number is falsy value ");
// }

// if (zero1) {""
//   console.log("zero obj is truly");
// } else {
//   console.log("zero obj is falsy");
// }

//object wrappers

// let str = "txt";
// str.test = 5;
// console.log(str.test);
// let n = 9e6;
// let nMin = 9e-6;
// console.log(n, nMin);

//imprecise calculation

// let n1 = 0.1;
// let n2 = 0.2;
// console.log(n1 + n2 == 0.3);
// console.log(+n1.toFixed(2) + +n2.toFixed(2) == 0.3);

//test isNaN();

// console.log(isNaN(NaN));
// console.log(isNaN("str"));
// console.log(Number.isNaN("123"));
// console.log(isNaN(2));

// test isFinit(value);

// console.log(isFinite(1));
// console.log(isFinite(" ")); // emty string and or space is trited as NaN
// console.log(isFinite(Infinity));

// Object.is(); method
//console.log(Object.is(5, "5"));

// functins parseInt(), parseFloat()

// console.log(parseFloat("1,2em"));
// console.log(parseInt("100px"));
// console.log(parseInt("e33")); //firrst simbul stop procces of reading number
// console.log(Math.random());
//task get two number from user and get it sum

// function add() {
//   let v = prompt("type first number ", "0");
//   let v0 = prompt("type the second number", "0");
//   return +v + +v0;
// }

// console.log(add());

// ROUNDING NUMBER

let n = 6.35;
console.log(n.toFixed(20));
console.log(Math.round(6.35 * 10) / 10);
