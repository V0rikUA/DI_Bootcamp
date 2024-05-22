const lodash = require("lodash");
const { addition, multiply } = require("./math");

const num1 = 5;
const num2 = 4;

console.log(addition(num1, num2));
console.log(lodash.add(num1, num2));
console.log(multiply(num1, num2));
console.log(lodash.multiply(num1, num2));
