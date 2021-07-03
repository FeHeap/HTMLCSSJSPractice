//escape sequence
window.alert('Hello, JavaScript!\n加油念書吧~');

//template string
let name = '鈴木';
let str = `Hello, ${name}先生\n今天天氣真好~`;
console.log(str);

//array
var data = ['JavaScript', ['jQuery', 'prototype.js'], 'ASP.NET'];
console.log(data[0]);
console.log(data[1][0]);

//Associative Array(object)\
var obj = { x:1, y:2, z:3 };
console.log(obj.x);
console.log(obj['x']);

//undefined
var z;
var obj = { a:12345 };
console.log(z);     //output:undefined
console.log(obj.b); //output:undefined