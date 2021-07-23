//match
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = '支援網站是 http://www.wings.msn.to/';
str += '範例介紹網站是 HTTP://www.web-deli.com/';
var result = str.match(p);
for(var i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}
/*
http://www.wings.msn.to/
HTTP://www.web-deli.com/
*/
/*----------------------------------*/


//g
var pg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/g;
var result = str.match(pg);
for(var i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}
/*
http://www.wings.msn.to/
*/
/*----------------------------------*/


//i
var pi = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i;
var result = str.match(pi);
for(var i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}
/*
http://www.wings.msn.to/
undefined
msn.
/
*/
/*----------------------------------*/


//m
var pg = /^[0-9]{1,}/g;
var str = '101隻狗。\n7個小矮人';
var result = str.match(pg);
for(var i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}
/*
101
*/

var pgm = /^[0-9]{1,}/gm;
var result = str.match(pgm);
for(var i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}
/*
101
7
*/
/*----------------------------------*/


//u
let string = '叱這個特殊字';
console.log(string.match(/^.這個特殊字$/gu));    //["叱這個特殊字"]
/*----------------------------------*/
