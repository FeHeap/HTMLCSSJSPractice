var obj = new Object();
console.log(obj.toString());    //[object Object]
console.log(obj.valueOf());     //{}

var dat = new Date();
console.log(dat.toString());    //Sun Jul 25 2021 16:47:22 GMT+0800 (台北標準時間)
console.log(dat.valueOf());     //1627202842095

var ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
console.log(ary.toString());    //prototype.js,jQuery,Yahoo! UI
console.log(ary.valueOf());     //["prototype.js", "jQuery", "Yahoo! UI"]

var num = 10;
console.log(num.toString());    //10
console.log(num.valueOf());     //10

var reg = /[0-9]{3}-[0-9]{4}/g;
console.log(reg.toString());    ///[0-9]{3}-[0-9]{4}/g
console.log(reg.valueOf());     ///[0-9]{3}-[0-9]{4}/g