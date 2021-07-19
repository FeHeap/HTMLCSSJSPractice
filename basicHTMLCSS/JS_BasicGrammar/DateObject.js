var dat = new Date(2016, 11, 25, 11, 37, 15, 999);
console.log(dat); //Sun Dec 25 2016 11:37:15 GMT+0800 (台北標準時間)
console.log(dat.getFullYear());      //2016
console.log(dat.getMonth());         //11
console.log(dat.getDate());          //25
console.log(dat.getDay());           //0     //0~6 : 星期日~星期六
console.log(dat.getHours());         //11
console.log(dat.getMinutes());       //37
console.log(dat.getSeconds());       //15
console.log(dat.getMilliseconds());  //999
console.log(dat.getTime());          //1482637035999
console.log(dat.getTimezoneOffset());//-540

console.log(dat.getUTCFullYear());      //2016
console.log(dat.getUTCMonth());         //11
console.log(dat.getUTCDate());          //25
console.log(dat.getUTCDay());           //0     //0~6 : 星期日~星期六
console.log(dat.getUTCHours());         //3
console.log(dat.getUTCMinutes());       //37
console.log(dat.getUTCSeconds());       //15
console.log(dat.getUTCMilliseconds());  //999

var dat2 = new Date();
dat2.setFullYear(2017);
dat2.setMonth(7);
dat2.setDate(5);
dat2.setHours(11);
dat2.setMinutes(37);
dat2.setSeconds(15);
dat2.setMilliseconds(513);
console.log(dat2.toLocaleString());     //2017/8/5 上午11:37:15
console.log(dat2.toUTCString());        //Sat, 05 Aug 2017 03:37:15 GMT
console.log(dat2.toDateString());       //Sat Aug 05 2017
console.log(dat2.toTimeString());       //11:37:15 GMT+0800 (台北標準時間)
console.log(dat2.toLocaleDateString()); //2017/8/5
console.log(dat2.toLocaleTimeString()); //上午11:37:15
console.log(dat2.toJSON()); //2017-08-05T03:37:15.513Z

console.log(Date.parse('2016/11/05'));  //1478275200000
console.log(Date.UTC(2016, 11, 5));     //1480896000000
console.log(Date.now());

//add
var dat = new Date(2017, 4, 15, 11, 40);
console.log(dat.toLocaleString());  //2017/5/15 上午11:40:00
dat.setMonth(dat.getMonth() + 3);
console.log(dat.toLocaleString());  //2017/8/15 上午11:40:00
dat.setDate(dat.getDate() - 20);
console.log(dat.toLocaleString());  //2017/7/26 上午11:40:00

//add_last
var dat = new Date(2017, 4, 15, 11, 40);
console.log(dat.toLocaleString());  //2017/5/15 上午11:40:00
dat.setMonth(dat.getMonth() + 1);
dat.setDate(0);
console.log(dat.toLocaleString());  //2017/5/31 上午11:40:00

//subtract
var dat1 = new Date(2017, 4, 15);
var dat2 = new Date(2017, 5, 20);
var diff = (dat2.getTime() - dat1.getTime()) / (1000 * 60 * 60 * 24);
console.log(diff);  //36