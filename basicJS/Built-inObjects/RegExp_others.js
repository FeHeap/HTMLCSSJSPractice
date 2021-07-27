//test
var pgi = /http(s)?:\/\/([\w]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = '支援網站是 http://www.wings.msn.to/';
var str2 = '支援網站「伺服器技術小窩」!';
console.log(pgi.test(str1));    //true
console.log(pgi.test(str2));    //false
/*----------------------------------*/


//search
var pgi = /http(s)?:\/\/([\w]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = '支援網站是 http://www.wings.msn.to/';
var str2 = '支援網站「伺服器技術小窩」!';
console.log(str1.search(pgi));  //6
console.log(str2.search(pgi));  //-1
/*----------------------------------*/


//replace
var pgi = /(http(s)?:\/\/([\w]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;
var str1 = '支援網站是 http://www.wings.msn.to/';
document.write(str1.replace(pgi, '<a href="$1">$1</a>'));
/*----------------------------------*/


//split
var p = /[\/\.\-]/gi;
console.log('2016/12/04'.split(p)); //["2016", "12", "04"]
console.log('2016-12-04'.split(p)); //["2016", "12", "04"]
console.log('2016.12.04'.split(p)); //["2016", "12", "04"]
/*----------------------------------*/