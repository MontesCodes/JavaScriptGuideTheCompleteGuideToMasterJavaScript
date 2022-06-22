'use strict';

var age;
age = prompt('What is your age?');
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);
console.log('After 5 year, you will be: ' + (age + 5));

var a = 3;
age = prompt('a');
console.log(typeof a);

a = a.toString();
console.log(a);
console.log(typeof a);

var a1 = NaN;
var b1 = 8;

let c1 = a1 + b1;
console.log(c1);

var a2 = NaN;
var b2 = '8';

let c2 = a2 + b2;
console.log(c2);

var a3 = 'word';
var b3 = 8;

let c3 = a3 + b3;
console.log(c3);
