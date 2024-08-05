// app.js - our main application file
//const math = require("./math.js");
import * as arithmeticModule from './math.js';
const nums = [1, 2, 3, 4, 5];
//const nums = [100, 10, 1];
// console.log(`The sum is ${math.sum(nums)}`);
// console.log(`The mean is ${math.mean(nums)}`);

console.log(`the sum is ${arithmeticModule.sum(nums)}`);
console.log(`The mean is ${arithmeticModule.mean(nums)}`);

