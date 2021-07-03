//plus
console.log(10 + 1);
console.log('10' + 1);
var today = new Date();
console.log(1234 + today);

//increment
var x = 3;
var y = x++;
console.log(x);
console.log(y);

var x = 3;
var y = ++x;
console.log(x);
console.log(y);

//float
console.log(0.2 * 3); //output:0.6000000000000001
console.log(0.2 * 3 === 0.6); //false
console.log(((0.2 * 10) * 3) / 10); //output:0.6
console.log((0.2 * 10) * 3 === 0.6 * 10); //true

//equal
var x = 1;
var y = x;
x = 2;
console.log(y); //output:1

var data1 = [0, 1, 2];
var data2 = data1;
data1[0] = 5;
console.log(data2); //output:[5, 1, 2]


//const can only be assigned once
const PI = 3.14;/*
PI = 3.1415926;  is not permitted*/

const DATA = [ 1, 2, 3 ];/*
DATA = [ 4, 5, 6 ]; is not permitted*/
DATA[1] = 10; //It's permitted, because the Memory location which DATA stores isn't be affected by this instruction

//destructuring assignment
var data = [56, 40, 26, 82, 19, 17, 73, 99];
let [x0, x1, x2, x3, x4, x5, x6, x7] = data;
console.log(x0); //56
console.log(x1); //40
console.log(x2); //26
console.log(x3); //82
console.log(x4); //19
console.log(x5); //17
console.log(x6); //73
console.log(x7); //99

//destructuring assignment ... 
let [y0, y1, y2, ...other] = data;
console.log(y0); //56
console.log(y1); //40
console.log(y2); //26
console.log(other); //[82, 19, 17, 73, 99]

//swap(a,b) by destructuring assignment
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); //2, 1


//destructuring assignment(object)
let book = { title: 'JAVA 口袋書', publish: '技術評論社', cost: 2680};
let { cost, title, memo = 'none' } = book;
console.log(title); //output:java口袋書
console.log(cost);  //output:2680
console.log(memo);  //output:none

let book2 = { title2: 'JAVA 口袋書', publish2: '技術評論社', cost2: 2680 , other2:{ keywd: 'JAVA SE 8', logo: 'logo.jpg' }};
let { title2, other2, other2: { keywd } } = book2;
console.log(title2);    //output:JAVA 口袋書
console.log(other2);    //output:{keywd: "JAVA SE 8", logo: "logo.jpg"}
console.log(keywd);     //output:JAVA SE 8

let book3 = { title: 'JAVA 口袋書', publish: '技術評論社' };
let { title: name2, publish: company} = book3;
console.log(name2);     //output:JAVA 口袋書
console.log(company);   //output:技術評論社

//equal
var data1 = ['JavaScript', 'Ajax', 'ASP.NET'];
var data2 = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(data1 == data2); //false

console.log(1 == true); //true

console.log('3.14E2' == 314);   //true
console.log('0x10' == 16);      //true
console.log('1' == 1);          //true
console.log('3.14E2' === 314);   //false
console.log('0x10' === 16);      //false
console.log('1' === 1);          //false

//condition
var x = 80;
console.log((x >= 70)? '合格': '不合格'); //output:合格

//logical
var x = 1;
var y = 2;
console.log( x === 1 && y === 1); //false
console.log( x === 1 || y === 1); //true

if(x === 1) { console.log('午安'); }
x === 1 && console.log('午安');
x === 1 || console.log('午安');   //no output

//shortcut
var msg = '';
msg = msg || 'Hello, World';
console.log(msg);   //output:Hello, World

var msg3 = '';
msg3 = (msg3 === undefined ? 'Hello, World!':msg3);
console.log(msg3);  //output:

var msg4;
msg4 = (msg4 === undefined ? 'Hello, World!':msg4);
console.log(msg4);  //output:Hello, World

//delete
var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(delete ary[0]); //output:true
console.log(ary);           //output:[empty, "Ajax", "ASP.NET"]

var obj = {x:1, y:2};
console.log(delete obj.x);  //output:true
console.log(obj.x);         //output:undifine

var obj2 = {x:obj, y:2};
console.log(delete obj2.x); //output:true
console.log(obj);           //output:{y: 2}

var data1 = 1;
console.log(delete data1);  //output:false
console.log(data1);         //output:1

temp = 10;
console.log(delete temp);   /* //output:true
console.log(temp);  Uncaught ReferenceError: temp is not defined*/ 

//typeof
var num = 1;
console.log(typeof num); //output:number

var string = 'Hello';
console.log(typeof string); //output:string

var flag = true;
console.log(typeof flag); //output:boolean

var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(typeof ary); //output:object

var obj = {x:1, y:2};
console.log(typeof obj); //output:object