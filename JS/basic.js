console.log('test-case');
let num = 10;
const name = 'saptarshi';
//console.log(num.__proto__);
//console.log(name.__proto__);
var str = 'saptarshi';
//console.log(str.toUpperCase());

var str = 'saptarshi';
str.custom = 1;
//console.log(str.custom);

var temp = new String(str);// wrapper object //
temp.custom = 1;
console.log(temp.custom);  