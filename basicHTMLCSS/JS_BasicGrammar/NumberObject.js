//NaN
console.log(Number.NAN === Number.NaN); //false
console.log(Number.isNaN(Number.NaN));  //true

//safe_integer
console.log(Number.MAX_SAFE_INTEGER);       //9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1);   //9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2);   //9007199254740992

//toXxxxx
var num1 = 255;
console.log(num1.toString());   //255
console.log(num1.toString(16)); //ff
console.log(num1.toString(8));  //377
var num2 = 123.45678;
console.log(num2.toExponential(2)); //1.23e+2
console.log(num2.toFixed(3));       //123.457
console.log(num2.toFixed(7));       //123.4567800
console.log(num2.toPrecision(10));  //123.4567800
console.log(num2.toPrecision(6));   //123.457
console.log();

//prase
var n = '123xxx'
console.log(Number(n));             //NaN
console.log(Number.parseFloat(n));  //123
console.log(Number.parseInt(n));    //123

var d = new Date();
console.log(Number(d));             //1625865572544
console.log(Number.parseFloat(d));  //NaN
console.log(Number.parseInt(d));    //NaN

var h = '0x10';
console.log(Number(h));             //16
console.log(Number.parseFloat(h));  //0
console.log(Number.parseInt(h));    //16

var b = '0b11'
console.log(Number(b));             //3
console.log(Number.parseFloat(b));  //0
console.log(Number.parseInt(b));    //0

var e = '1.01e+2';
console.log(Number(e));             //101
console.log(Number.parseFloat(e));  //101
console.log(Number.parseInt(e));    //1

//convert
console.log(typeof(123 + ''));  //string
console.log(typeof('123' - 0)); //number
var num = 123;
console.log(!!num); //true