//basic varible declaration with var
var x,y;
var msg1 = 'Hi!';
var msg1 = 'Hello, JavaScript!';
console.log(msg1);
x = 'I love U';
console.log(x);
x = 520
console.log(x);

//basic varible declaration with let(duplicate varible declaration is not allowed)
let msg2 = 'Hello, world';
console.log(msg2);

//const
const TAX = 1.08;
var price = 100;
console.log(price * TAX);

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

