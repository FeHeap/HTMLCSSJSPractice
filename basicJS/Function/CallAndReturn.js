//return_array
function getMaxMin(...nums) {
    return [Math.max(...nums), Math.min(...nums)];
}

let result = getMaxMin(10, 35, -5, 78, 0);
console.log(result);    //[78, -5]

let [max, min] = getMaxMin(10, 35, -5, 78, 0);
console.log(max);   //78
console.log(min);   //-5

let [,Min] = getMaxMin(10, 35, -5, 78, 0);
console.log(Min);   //-5


//recursive
function factorial(n) {
    if(n != 0) { return n * factorial(n - 1); }
    return 1;
}

console.log(factorial(5));  //120


//higher
function arrayWalk(data , f){
    for(var key in data) {
        f(data[key], key);
    }
}

function showElement(value, key) {
    console.log(key + ':' + value);
}

var Result = 0;
function sumElement(value, key) {
    Result += value;
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement);
/*
0:1
1:2
2:4
3:8
4:16
*/
arrayWalk(ary, sumElement);
console.log('加總:' + Result);    //加總:31


//anonymous
function arrayWalk(data , f){
    for(var key in data) {
        f(data[key], key);
    }
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(
    ary,
    function(value, key) {
        console.log(key + ':' + value);
    }
);
/*
0:1
1:2
2:4
3:8
4:16
*/