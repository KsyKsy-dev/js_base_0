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
let arr = { name: "arr" };
let arr1 = { name: "arr1" };

function testThis(name) {
  console.log(name);
}
arr.f = testThis;
arr.f(this.name);
