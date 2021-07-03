//if
var x = 15;
if(x >= 20){
    console.log('變數x大於等於20');
}
else if(x >= 10){
    console.log('變數x大於等於10');
}
else{
    console.log('變數x小於10');
}

//if_nest
var x = 30;
if(x >= 10){
    if(x >= 20){
        console.log('變數x大於等於20');
    }
    else{
        console.log('變數x大於等於10');
    }
}
else{
    console.log('變數x小於10');
}

//switch_pre
var rank = 'B';
if(rank === 'A'){
    console.log('Rank A');
}
else if(rank === 'B'){
    console.log('Rank B');
}
else if(rank === 'C'){
    console.log('Rank C');
}
else{
    console.log('No rank');
}

//switch
var rank = 'B';
switch (rank){
    case 'A':
        console.log('Rank A');
        break;
    case 'B':
        console.log('Rank B');
        break;
    case 'C':
        console.log('Rank C');
        break;
    default:
        console.log('No rank');
        break;
}

//switch_fall
var rank = 'B';
switch(rank){
    case 'A':
    case 'B':
    case 'C':
        console.log('合格!');
        break;
    case 'D':
        console.log('不合格');
        break;
}

//switch_ng
var x = '0';
switch (x){ //switch comparison by '==='
    case 0:
        console.log('Match'); //x !== 0
        break;
    default:
        console.log('Doesn\'t Match');
}

//while
var x = 8;
while(x < 10){
    console.log('x = ' + x);
    x++;
}

//do...while
var y = 8;
do{
    console.log('y = ' + y);
    y++;
}while(y < 10);

//for
for(var x = 8;x < 10;x++){
    console.log('x = ' + x);
}

//forin
var datas = {apple:150, orange:100, banana:120};
for(var key in datas){
    console.log(key + ' = ' + datas[key]);
}

//forin_array_ng
var datas = ['apple', 'orange', 'banana'];
Array.prototype.hoge = function(){};
for(var key in datas){
    console.log(datas[key]);
}
/*
output:
apple
orange
banana
function(){}
*/

//forin_array_ok
var datas = ['apple', 'orange', 'banana'];
for(var i = 0, len = datas.length;i < len;i++){
    console.log(datas[i]);
}
/*
output:
apple
orange
banana
*/

//forof
var datas = ['apple', 'orange', 'banana'];
Array.prototype.hoge = function(){};
for(var value of datas){
    console.log(value);
}
/*
output:
apple
orange
banana
*/

//lable_no
for(var i = 1; i < 10; i++){
    for(var j = 1; j < 10; j++){
        var k = i * j;
        if(k > 30){
            break;
        }
        document.write(k + '&nbsp')
    }
    document.write('<br>');
}

//lable
kuku:
for(var i = 1; i < 10; i++){
    for(var j = 1; j < 10; j++){
        var k = i * j;
        if(k > 30){
            break kuku;
        }
        document.write(k + '&nbsp')
    }
    document.write('<br>');
}

//try
var i = 1;
try{
    i = i * p;
}catch(e){
    console.log(e.message);
}finally{
    console.log('處理結束');
}
/*
output:
p is not defined
處理結束
*/

//throw
var x = 1;
var y = 0;
try{
    if(y === 0) {throw new Error('被 0 除!')}
    var z = x / y;
}catch(e){
    console.log(e.message);
}





