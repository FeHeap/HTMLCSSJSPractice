//args
function showMessage(value) {
    console.log(value)
}

showMessage();                  //undefined
showMessage('Fe');              //Fe
showMessage('Fe', 'Arthur');    //Fe


//args_check
function showTheMessage(value) {
    if(arguments.length !== 1) {
        throw new Error('參數個數錯誤:' + arguments.length);
    }
    console.log(value);
}

try {
    showTheMessage('Fe', 'Arthur');
}
catch(e) {
    window.alert(e.message);    //參數個數錯誤:2
}


//default_args
function GetTriangle(base, height) {
    if(base === undefined) { base = 1; }
    if(height === undefined) { height = 1; }
    return base * height / 2;
}

console.log(GetTriangle(5)); //2.5


//varible_args
function sum() {
    var result = 0;
    for(var i = 0, len = arguments.length; i < len; i++){
        var tmp = arguments[i];
        if(typeof tmp !== 'number') {
            throw new Error('輸入的參數不是數值' + tmp);
        }
        result += tmp;
    }
    return result;
}

try {
    console.log(sum(1, 3, 5, 7, 9)); //25
}
catch(e) {
    window.alert(e.message);
}


function printf(format) {
    for(var i = 0, len = arguments.length; i < len; i++){
        var pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
        format = format.replace(pattern, arguments[i]);
    }
    console.log(format)
}

printf('Hello! Mr.{0}, I\'m {1}.','JS','Fe');


//named_args
function GetaTriangle(args) {
    if(args.base == undefined) { args.base = 1; }
    if(args.height == undefined) { args.height = 1; }
    return args.base * args.height / 2;
}

console.log(GetaTriangle({ base:5, height:4 }));    //10


//default_new
function GetATriangle(base = 1, height = 1) {
    return base * height / 2;
}

console.log(GetATriangle(5));               //2.5
console.log(GetATriangle(5, null));         //0
console.log(GetATriangle(5, undefined));    //2.5

function multi(a, b = a) {
    return a * b;
}

console.log(multi(10, 5));  //50
console.log(multi(3));      //9

//function Multi(a = b, b = 5) {
//    return a * b;
//}
//
//console.log(Multi());   //Cannot access 'b' before initialization

function GotATriangle(base = 1, height) {
    return base * height / 2;
}

console.log(GotATriangle(10));  //NaN


//default_require
function show(x, y = 1) {
    console.log('x = ' + x);
    console.log('y = ' + y);
}

show();
/*
x = undefined
y = 1
*/

function required() {
    throw new Error('參數不足');
}

function hoge(value = required()) {
    return value;
}

try{
    hoge();
}
catch(e){
    console.log(e.message); //參數不足
}


//rest_param
function Sum(...nums) {
    let result = 0;
    for(let num of nums) {
        if(typeof num !== 'number') {
            throw new Error('該元素值非數值:' + num);
        }
        result += num;
    }
    return result;
}

try{
    console.log(Sum(1, 3, 5, 7, 9));    //25
}
catch(e) {
    window.alert(e.message);
}


//spread
console.log(Math.max(15, -3, 78, 1));   //78
console.log(Math.max([15, -3, 78, 1])); //NaN
console.log(Math.max.apply(null, [15, -3, 78, 1])); //78
console.log(Math.max(...[15, -3, 78, 1]));          //78


//named_args_new
function GotaTriangle({ base = 1, height = 1}){
    return base * height / 2;
}

console.log(GotaTriangle({ base:5, height:4 }));    //10


//named_args_prop
function SHOW({name}){
    console.log(name);
}

let member = {
    mid: 'Y0001',
    name: 'Fejyanaii',
    address: 't_yanada@example.com'
};

SHOW(member);   //Fejyanaii