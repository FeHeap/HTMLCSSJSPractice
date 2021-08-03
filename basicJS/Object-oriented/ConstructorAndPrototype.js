//prototype
var Member_1 = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member_1.prototype.getName = function() {
    return this.firstName + ' ' + this.lastName;
};

var mem_1 = new Member_1('Fe','Chuang');
console.log(mem_1.getName()); //Fe Chuang


//dynamic_prototype
var Member_2 = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var mem_2 = new Member_2('Fe','Chuang');
Member_2.prototype.getName = function() {
    return this.firstName + ' ' + this.lastName;
};

console.log(mem_2.getName());   //Fe Chuang


//prototype
var Member_3 = function() { };

Member_3.prototype.sex = 'mam';
var mem_3 = new Member_3();
var mem_4 = new Member_3();

console.log(mem_3.sex + '|' + mem_4.sex);   //mam|mam
mem_4.sex = 'woman';
console.log(mem_3.sex + '|' + mem_4.sex);   //mam|womam

delete mem_3.sex;
delete mem_4.sex;
console.log(mem_3.sex + '|' + mem_4.sex);   //mam|mam


//undefined
var Member_4 = function() { };

Member_4.prototype.sex = 'man';

var mem_3 = new Member_4();
var mem_4 = new Member_4();
console.log(mem_3.sex + '|' + mem_4.sex);   //mam|mam
mem_4.sex = undefined;
console.log(mem_3.sex + '|' + mem_4.sex);   //mam|undefined

for(var key in mem_4){
    console.log(key + ':' + mem_4[key]);
}//sex:undefined


//literal
var Member_5 = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member_5.prototype.getName = function() {
    return this.firstName + ' ' + this.lastName;
};

Member_5.prototype.toString = function() {
    return this.firstName + this.lastName;
};

var Member_6 = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member_6.prototype = {
    getName : function() {
        return this.firstName + ' ' + this.lastName;
    },
    toString : function() {
        return this.firstName + this.lastName;
    }
};


//static
var Area = function() { };

Area.version = '1.0';

Area.triangle = function(base, height) {
    return base * height * base / 2;
};

Area.diamond = function(weight, height) {
    return weight * height / 2;
};

console.log('Area 類別的版本:' + Area.version);      //Area 類別的版本:1.0
console.log('三角形面積:' + Area.triangle(5, 3));    //三角形面積:37.5

//var a = new Area();
//console.log('菱形面積:' + a.diamond(10, 2));    a.diamond is not a function
