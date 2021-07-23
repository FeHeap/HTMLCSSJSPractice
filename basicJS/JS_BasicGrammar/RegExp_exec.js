//exec
var p = /http(s)?:\/\/([\w]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = '支援網站是 http://www.wings.msn.to/';
str += '範例介紹網站是 HTTP://www.web-deli.com/';
var result = p.exec(str);
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
var p = /http(s)?:\/\/([\w]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = '支援網站是 http://www.wings.msn.to/';
str += '範例介紹網站是 HTTP://www.web-deli.com/';
while((result = p.exec(str)) !== null) {
    console.log(result[0]);
}
/*
http://www.wings.msn.to/
HTTP://www.web-deli
*/
/*----------------------------------*/