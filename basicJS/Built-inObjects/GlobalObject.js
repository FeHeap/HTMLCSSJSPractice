//is_nan
console.log(isNaN('hoge'));         //true
console.log(Number.isNaN('hoge'));  //false

//encodeURI
var str = '!"#$%&()+_*/@~_|;:,.';
console.log(encodeURI(str));            //!%22#$%25&()+_*/@~_%7C;:,.
console.log(encodeURIComponent(str));   //!%22%23%24%25%26()%2B_*%2F%40~_%7C%3B%3A%2C.

//eval
var str = 'console.log("eval function")';
eval(str);  //eval function

var obj = { hoge: 1, foo: 2 };
var prop = 'hoge';
eval('console.log(obj.' + prop + ')');  //1
console.log(obj[prop]); //1

eval('var data = { "hoge": 1, "foo": 2 }');
console.log(data.hoge); //1

//json
var data = JSON.parse('{ "hoge": 1, "foo": 2 }');
console.log(data.hoge); //1

var obj = { hoge: 1, foo: 2 };
console.log(JSON.stringify(obj));   //{"hoge":1,"foo":2}