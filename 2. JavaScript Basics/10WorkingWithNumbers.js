'use strict';
// Converting number base

// 16 base
var string1 = 10;
var result1 = string1.toString(16);

console.log(result1);

// 2 base
var str2 = 10;
var result2 = str2.toString(2);

console.log(result2);

var string3 = 200;

var result3 = string3.toExponential(2);

console.log(result3);

var string4 = 200.78;

var result4 = string4.toFixed(8);

console.log(result4);

var string5 = 200.78;

var result5 = string5.toPrecision(8);

console.log(result5);

var math3 = Math.PI;

console.log(math3);

let math1 = Math.floor(200.78);
console.log(math1);

let math2 = Math.ceil(200.78);
console.log(math2);

let math4 = Math.min(200.78, 300.84, 500.38);
console.log(math4);

let math5 = Math.max(200.78, 300.84, 500.38);
console.log(math5);

// let math6 = Math.floor(Math.random() * math6);
// console.log(math6(3));
