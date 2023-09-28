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

// let n = 6.35;
// console.log(n.toFixed(20));
// console.log(Math.round(6.35 * 10) / 10);

// repeat untill input is a number
// 1 prompt
// 2 check !Number.isFinite()
//if null or " "break
//return +num

// function checkNumber() {
//   let n;
//   do {
//     n = prompt("plese enter valid number", 0);
//     if (n === null || n === " ") {
//       return null;
//     }
//   } while (!isFinite(n));
//   return +n;
// }

// console.log(`it is valid number: ${checkNumber()}`);

//minmax random number exept max

// function random(min, max) {
//   //Math.random()* (max-min)
//   //min + value
//   return min + Math.random() * (max - min);
// }
// console.log(random(1, 3));

// random iteger from min to max including max

//
// function randomInt(min, max) {
//   // Math.radom* (max-min+1)
//   // add min
//   return parseInt(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomInt(3, 8));

//strings
// for (let char of "hey") {
//   console.log(char);
// }

// srting are amutuble

// let m = "TWO";

// let n = m[0] + m[2];
// console.log(n);

// indexOf()
// let str = "As sly as a fox, as strong as an ox";

// let target = "as"; // let's look for it
// console.log(str.length);
// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   console.log(foundPos);
//   if (foundPos == -1) break;

//   console.log(`Found at ${foundPos}`);
//   pos = foundPos + 1; // continue the search from the next position
// }

// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   console.log(pos);
// }

// indexOf() star value is 0

// let fr = "some dummy text";
// if (fr.indexOf("some") != -1) {
//   console.log("go");
// } else {
//   console.log("arrived");
// }

//toUpperCase();
// function name(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(name("john"));

// spam check

// function checkSpam(fr) {
//   console.log(fr);

//   let fr1 = fr.toLowerCase();
//   return fr1.includes("xxx", 0) || fr1.includes("viagra", 0);
// }
// console.log(checkSpam(" for me xxx"));
// console.log(checkSpam(" for me Viagra"));
// console.log(checkSpam(" for me no way just going ahead"));

// subst string
// function curentCurrency(n) {
//   return +n.slice(1);
// }
// console.log(curentCurrency("$120") === 120);

// array last element access
// let arr = [2, 3, 4, 5, 6];

// console.log(arr[arr.length - 1]);
// //shorter sintax arr.at(-1)
// console.log(arr.at(-1));

// let fr = ["o", "b", "d"];
// for (let f of fr) {
//   console.log(f);
// }
// array comparison with primitives
// let arr = [];
// let arr1 = [];
// console.log([] == []);
// console.log(0 == []);
// console.log(0 == "");
// console.log("0" == "");

// let msk = ["Jazz", "Blues"];

// msk.push("Roxìck-n-Roll");
// console.log(msk);
// msk.Math.floor((msk.lengt - 1) / 2) = "Classics";

// console.log(msk);

// let arr = [2, 4];
// arr.push(function () {
//   console.log(this);
// });

// arr[2]();

// arr method number imput

// function sumInput() {
//   let n;
//   let arr = [];
//   let sum = 0;
//   while (true) {
//     n = prompt("add numeric value", 0);

//     if (!isFinite(n) || n === "" || n == null) break;
//     arr.push(+n);
//   }
//   for (let it of arr) {
//     sum += it;
//   }
//   return sum;
// }
// console.log(sumInput());

//Find contigous sub array of array with the maximal sum of items
// function maxSubArraySum(arr) {
//   let maxSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     //console.log(" arr " + i);
//     let subArr = 0;
//     for (let j = i; j < arr.length; j++) {
//       subArr += arr[j];
//       //console.log(" subArr " + subArr, "circle  " + j);
//       maxSum = Math.max(subArr, maxSum);
//       //console.log("maxSum " + maxSum);
//     }
//   }
//   console.log("Arr maxSum " + maxSum);
//   return maxSum;
// }
// console.log(maxSubArraySum([0, -2, 5, 7, -5, 0, 6, 9]));

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;
//   for (let item of arr) {
//     partialSum += item;
//     if (partialSum < 0) {
//       partialSum = 0;
//     }
//     maxSum = Math.max(partialSum, maxSum);
//   }
//   return maxSum;
// }

// console.log(getMaxSubSum([-1, 2, 3, -1, 6, 9])); // 5
// console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
// console.log(getMaxSubSum([1, 2, 3])); // 6
// console.log(getMaxSubSum([100, 1, -9, 2, -3, 5])); // 100

// array methods
// splice

// let arr = [1, 2, 4];
// let arr2 = arr.splice(1, 2, 6, 8);
// console.log(arr, arr2);

// slice return new arr

// let m = ["go", "stop", "continue"];
// let n = m.slice(-2);
// let l = m.slice(0, 2);
// let arr = m.slice();
// console.log(m, n, l, arr);

// concat

let arr = [1, 3, 4];
let arr0 = arr.concat(6, "0", [3, 56]);
console.log(arr0.length);
