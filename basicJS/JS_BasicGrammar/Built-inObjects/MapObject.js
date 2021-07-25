let m = new Map();
m.set('dog', 'WANWAN');
m.set('cat', 'NIYA-');
m.set('mouse', 'CYU-');

console.log(m.size);    //3
console.log(m.get('dog'));  //WANWAN
console.log(m.has('cat'));  //true
for (let key of m.keys()) {
    console.log(key);
}
/*
dog
cat
mouse
*/

for (let value of m.values()) {
    console.log(value);
}
/*
WANWAN
NIYA-
CYU-
*/

for (let [key, value] of m) {
    console.log(value);
}
/*
WANWAN
NIYA-
CYU-
*/

let M = new Map([['dog', 'WANWAN'],['cat', 'NIYA-'],['mouse', 'CYU-']]);
M.delete('dog');
console.log(M.size);    //2
M.clear();
console.log(M.size);    //0

console.log();
console.log();
console.log();

// equal
var Mp = new Map();
Mp.set('1', 'hoge');
console.log(Mp.get(1));      //undefined
console.log(Mp.get('1'));    //hoge

// NaN
var Mp = new Map();
Mp.set(NaN, 'hoge');
console.log(Mp.get(NaN));   //hoge

// object
var Mp = new Map();
Mp.set({}, 'hoge');
console.log(Mp.get({}));    //undefined

var key = {};
var Mp = new Map();
Mp.set(key, 'hoge');
console.log(Mp.get(key));    //hoge
