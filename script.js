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

// let arr = [1, 3, 4];
// let arr0 = arr.concat(6, "0", [3, 56]);
// console.log(arr0.length);

//concat arraylike

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1,
// };

// alert(arr.concat(arrayLike)); // 1,2,[object Object]

// concat arr with arraylike using is.concatSpredable

// let arr0 = ["2", 7];
// let arrayLike0 = {
//   0: "do",
//   1: "it",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };
// let newArr0 = arr0.concat(arrayLike0);
// console.log(newArr0);

// methods includes/indexOf/lastIndexOf

//includes return true if arr includes el and false if doesn't

// let arr = [2, 4];
// console.log(arr.includes(3));

// indexOf() return index of element if it lacated in arr, if doesn't returns -1, lasIndexOf() seraching from the end of arr

// let arr = [2, 5, 8, 8];
// console.log(arr.indexOf(8), arr.lastIndexOf(8));

//find/findIndexOf/findLastIndexOf

// find works with item, index, array

// let arr = [
//   { id: 0, name: "who" },
//   { id: 1, name: "why" },
//   { id: 2, name: "when" },
// ];
// let foundedEl = arr.find((el) => {
//   return el.id == 1;
// });
// console.log(foundedEl.name);

//method findIndex/ findLastIndex are returning the index of the element

// let urs = [
//   { user: 0, nick: "nemo" },
//   { user: 1, nick: "dori" },
//   { user: 2, nick: "nemo" },
// ];

// let indexOfUSer = urs.findIndex((el) => el.nick === "nemo");
// let indexOfUser = urs.findLastIndex((el) => el.nick === "nemo");
// console.log(indexOfUser, indexOfUSer);

//filter method is searchig for the  multiple ellemnts on the array that muching for the condition and riturns the new array with the filtered elements ele, index, arr
// let usr = [
//   { user: 0, nick: "nemo" },
//   { user: 1, nick: "dori" },
//   { user: 2, nick: "nemo" },
// ];

// let newUsrs = usr.filter((el, index, arr) => el.nick === "nemo");
// console.log(newUsrs);

//map

// let arr = ["some", "dummy", "text"].map((el) => el.length);
// console.log(arr);

//sort method returns modified arr and modifies array itself

// let arr = [2, 4, 18, 5, 22].sort(function (a, b) {
//   console.log(a + " > < " + b);
//   return a - b;
// });
// console.log(arr);

// string comare method sort+localCompare()
// let arr = ["ancora", "alarm", "Alabama", "brother, brain"];

// arr.sort((a, b) => a.localeCompare(b));
// console.log(arr);

//reverse method
// let arr = ["ancora", "alarm", "Alabama", "brother"];
// arr.reverse();
// console.log(arr);

//spolit method

// let names = "Bill, Mary, Mike";

// let arr = names.split(", ");
// for (let name of arr) {
//   console.log(`wright message  ${name}`);
// }
// reduce

// let numbers = [2, 4, 1, 5];

// let calc = numbers.reduce(function (acc, item, index, arr) {
//   console.log(acc + item);
//   return acc + item;
// }, 3);

// console.log(calc);
// let arr = [];
// let obj = {};
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// camelize

// function camelize(str) {
//   let startStr = str.split("");
//   console.log(startStr);

//   let indexOfDash = [];
//   startStr.forEach((index, item) => {
//     if (item == "-") {
//       console.log();
//     }
//   });
// }
// console.log(camelize("my-str-gg"));

// let arr = [2, 4, 5];
// console.log(arr.toString());
// console.log(arr["1"]);

// let arr = [];
// arr[8] = "I'm empty string";
// arr.length = 2;
// console.log(arr.length, arr[1]);

// let arr = [3, 4, 6];
// let arr0 = [4, 4, 6];
// /// mutating copy

// let arrCopy0 = arr.copyWithin();
// arrCopy0[0] = "mute";
// console.log(arr, arrCopy0);

//unmutating copy

// let copyArr = [...arr0];
// let copyArr0 = arr0.slice();
// copyArr0[0] = "I'm sliced";
// copyArr[0] = "go";
// console.log(arr0, copyArr, copyArr0);

// callback function this value
// let arg = 23;
// let obj = { key: "value" };

// [3, 5, 7].forEach(function () {
//   console.log(this);
// }, arg);

// [4, 6].forEach(function () {
//   console.log(this.key);
// }, obj);

// [5, 3, 5].forEach(function () {
//   console.log(this);
// }, null);
// this keyword

// let fn = function () {
//   console.log(this);
// };
// let afn = () => console.log(this);

// let obj = {
//   a: fn,
//   b: afn,
// };
// obj.a();
// obj.b();
// let obj = {
//   a: 0,
// };
// obj.str = 5;
// console.log(obj.str);

// let str = "str";
// str.test = 5;
// console.log(str.test);

//Numbers

// let i = 1e9;
// console.log(i);

// let i = 1e4;
// console.log(i === 1 * 10000);

// let mcs = 0.000001;
// console.log(mcs === 1 * 1e-6);

// toString(base);

// let num = 255;
// console.log(num.toString(16));
// console.log(num.toString(2));

// two dots call method

//console.log((2343989859).toString(36));
//console.log(4367676.toString(36)); ERROR!!

//rounding

//dounw

// console.log(Math.floor(3.6));

// //up

// console.log(Math.ceil(3.6));

// //nearest
// console.log(Math.round(3.6));

// //trunk the decimal not for ex
// console.log(Math.trunc(3, 6));

// 2nd digit after decimal Math.round(n*100)/100

// let n = 123.567;
// console.log(n * 100);

// console.log(Math.round(n * 100) / 100);

// toFixed() method returns a sring

// let n = 35.488;

// console.log(typeof +n.toFixed(7));

// isNaN() converts argument to a number and check it for NaN

// let str = "go";
// let n = 2;
// console.log(isNaN(str));
// the value NaN is unique, it doesn't equal to anything including itself
// console.log(NaN === NaN);

//isFinite() converts its argument and true if it's a number false if its Infinite/-Infinite/NaN
// console.log(isFinite("22"));
// console.log(isFinite("go"));
// console.log(isFinite(Infinity));

// isFinite() used if the to validate weather the string value is a regular number( ampty strig or spase is converted to 0)
// let num = +prompt("Enter number", "");
// console.log(isFinite(num));

// Object.is()method

// console.log(Object.is(0, -0));
// console.log(Object.is(NaN, NaN));
//parseInt() parseFloat()

// console.log(parseInt("200px"));
// console.log(parseFloat("123,4euro"));
// console.log(parseInt("a77"));
// console.log(parseInt("ff", 16));
// let m = +prompt("add number one", " ");
// let n = +prompt("add number 2", " ");
// console.log(n + m);

// let num;

// function readNum() {
//   do {
//     num = +prompt("add number", " ");
//     if (num === null || num === " ") return null;
//   } while (!isFinite(num));
//   return +num;
// }
// console.log(num);
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   address: {
//     city: "Example City",
//     country: "Example Country",
//   },
// };
// let person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   address: {
//     city: "Example City",
//     country: "Example Country",
//   },
// };

// console.log(person.toString());
// console.log("str" + person);

// console.log(person + person1);

// chae position

// let str = "str";
// console.log(str[0]);
// // last characker just for atr.at
// console.log(str.at(-1));

// itterate over str

// for (let char of "str") {
//   console.log(char);
// }

// indexOf() 1- loop over the string, 2. break after found char, 3- repeat from  +1 from the new position
// outout data
// let str = "As sly as fox, as strong as ox";
// let pos = 0;
// let char = "as";
// while (true) {
//   let foundPos = str.indexOf(char, pos);
//   console.log(foundPos);
// }
// while (true) {
//   let foundPos = str.indexOf(char, pos);
//   console.log(foundPos);
//   if (foundPos == -1) break;
//   pos = foundPos + 1;
// }
//shorter way

// let str = "As sly as fox, as strong as ox";
// let pos = -1;
// let char = "as";

// while ((pos = str.indexOf(char, pos + 1)) != -1) {
//   console.log(pos);
// }
// let str = "here we are";
// if (str.indexOf("here") != -1) {
//   console.log("checked");
// }
