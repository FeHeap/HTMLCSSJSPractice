//class
class MemberClass_1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}

let mem_c1 = new MemberClass_1('Fe', 'Chuang');
console.log(mem_c1.getName());   //Fe Chuang


//class_prop
class MemberClass_2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    get firstName() {
        return this._firstName;
    }
    
    set firstName(value) {
        this._firstName = value;
    }
    
    get lastName() {
        return this._lastName;
    }
    
    set lastName(value) {
        this._lastName = value;
    }
    
    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}

let mem_c2 = new MemberClass_2('Fe','Chuang');
console.log(mem_c2.getName());   //Fe Chuang


//class_static
class AreaClass {
    static getaTriagle(base, height) {
        return base * height / 2;
    }
}

console.log(AreaClass.getaTriagle(10, 5));  //25


//class_extends
class MemberClass_3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class BusinessMember_1 extends MemberClass_3 {
    work() {
        return this.getName() + ' is working.';
    }
}

let bm1 = new BusinessMember_1('Fe', 'Chuang');
console.log(bm1.getName());  //Fe Chuang
console.log(bm1.work());     //Fe Chuang is working.


//class_super
class BusinessMember_2 extends MemberClass_3 {
    constructor(firstName, lastName, clazz){
        super(firstName, lastName);
        this.clazz = clazz;
    }
    
    getName() {
        return super.getName() + '/position: ' + this.clazz;
    }
}

let bm2 = new BusinessMember_2('Fe','Chuang','CEO');
console.log(bm2.getName()); //Fe Chuang/position: CEO


//literal_method
let memberLiteral1 = {
    name: 'Fe Chuang',
    birth: new Date(2001, 7, 15),
    toString() {
        return this.name + ' / birthday:' + this.birth.toLocaleDateString();
    } 
};

console.log(memberLiteral1.toString()); //Fe Chuang / birthday:2001/8/15


//literal_prop
let name = 'Fe Chuang';
let birth = new Date(2001, 7, 15);
let memberLiteral2 = { name, birth };
console.log(memberLiteral2);    //{name: "Fe Chuang", birth: Wed Aug 15 2001 00:00:00 GMT+0800 (台北標準時間)}


//literal_compute
let i = 0;
let memberLiteral3 = {
    name: 'Fe Chuang',
    birth: new Date(2001, 7, 15),
    ['memo' + ++i]: 'NCHU',
    ['memo' + ++i]: 'CSE',
    ['memo' + ++i]: 'Taiwan'
};

console.log(memberLiteral3);    //{name: "Fe Chuang", birth: Wed Aug 15 2001 00:00:00 GMT+0800 (台北標準時間), memo1: "NCHU", memo2: "CSE", memo3: "Taiwan"}


//iterator
let data_ary = ['one', 'two', 'three'];
let data_str = 'aiueo';
let data_map = new Map([['Mon', '月曜日'], ['TUE', '火曜日'], ['WED', '水曜日']]);

for(let d of data_ary) {
    console.log(d);
}
/*
one
two
three
*/

for(let d of data_str) {
    console.log(d);
}
/*
a
i
u
e
o
*/

for(let [key, value] of data_map) {
    console.log(`${key}:${value}`);
}
/*
Mon:月曜日
TUE:火曜日
WED:水曜日
*/


//iterator_array
let Data_ary =  ['one', 'two', 'three'];
let itr = Data_ary[Symbol.iterator]();
let D;
while(D = itr.next()) {
    if(D.done) { break; }
    console.log(D.done);
    console.log(D.value);
}
/*
false
one
false
two
false
three
*/


//iterator_my
class MyIterator {
    constructor(data) {
        this.data = data;
    }
    
    [Symbol.iterator]() {
        let current = 0;
        let that = this;
        return {
            next() {
                return (current < that.data.length)?{value: that.data[current++], done: false}:{done: true};
            }
        };
    }
}

let itr_my = new MyIterator(['one', 'two', 'three']);
for(let value of itr_my) {
    console.log(value);
}
/*
one
two
three
*/


//gen
function* myGenerator() {
    yield 'abcde';
    yield 'fghij';
    yield 'klmno';
}

for(let t of myGenerator()) {
    console.log(t);
}
/*
abcde
fghij
klmno
*/


//gen_prime
function* genPrimes() {
    let num = 2;
    while(true) {
        if(isPrime(num)) { yield num; }
        num++;
    }
}

function isPrime(value) {
    let prime = true;
    if(value % 2 === 0) {
        prime = false;
    }
    else {
        for(let i = 3; i <= Math.floor(Math.sqrt(value)); i+=2) {
            if(value % i === 0) {
                prime = false;
                break;
            }
        }
    }
    return prime;
}

for(let value of genPrimes()) {
    if(value > 20) { break; }
    console.log(value);
}
/*
2
3
5
7
11
13
17
19
*/


//gen_iterator
class MyIterator_gen {
    constructor(data) {
        this.data = data;
        this[Symbol.iterator] = function*() {
            let current = 0;
            let that = this;
            while(current < that.data.length) {
                yield that.data[current++];
            }
        };
    }
}


//proxy
let data_color = { red: '紅色', yellow: '黃色'};
var proxy = new Proxy(data_color, {
    get(target, prop) {
        return prop in target?target[prop]:'?';
    }
});

console.log(proxy.red);     //紅色
console.log(proxy.nothing); //?0
proxy.blue = '藍色';
console.log(data_color.blue);   //藍色
console.log(proxy.blue);        //藍色