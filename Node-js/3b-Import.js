// Way 2 of Importing from 2-Export.js as Type : Common.js in Package.json;
// 1
const { sum, power } = require("./2b-Export.js");
console.log(sum(3, 3));
console.log(power(5));

//2;
const Module2 = require("./2b-Export.js");
console.log(Module2.sum(1, 1));
console.log(Module2.power(5));

// Note: Mostly Used
