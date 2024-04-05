"use strict";

let obj1 = {
  name: "Faizan",
};
let obj2 = obj1;
obj1 = {
  name: "Hassan",
};
console.log(obj2);