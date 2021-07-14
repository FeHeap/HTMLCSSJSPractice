let s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);
s.add(5);

console.log(s.has(100));    //true
console.log(s.size);    //4

for (let val of s.values()) {
    console.log(val);
}
/*
10
5
100
50
*/

for (let val of s) {
    console.log(val);
}
/*
10
5
100
50
*/

s.delete(100);
console.log(s.size); //3
s.clear();
console.log(s.size); //0

let St = new Set([10, 5, 100, 50, 5]);

let S = new Set();
s.add(NaN);
s.add(NaN);
console.log(s.size);    //1
s.add({});
s.add({});
console.log(s.size);    //3