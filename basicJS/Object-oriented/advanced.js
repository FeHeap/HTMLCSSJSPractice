//private
function Triangle() {
    var _base;
    var _height;
    
    var _checkArgs = function(val) {
        return (typeof val == 'number' && val > 0);
    }
    
    this.setBase = function(base) {
        if(_checkArgs(base)) { _base = base; }
    }
    this.getBase = function() { return _base; }
    
    this.setHeight = function(height) {
        if(_checkArgs(height)) { _height = height; }
    }
    this.getHeight = function() { return _height; }
}

Triangle.prototype.getArea = function() {
    return this.getBase() * this.getHeight() / 2;
};

var T = new Triangle();
T._base = 10;
T._height = 2;
console.log('The area of traingle T is: ' + T.getArea());   //The area of traingle t is: NaN

T.setBase(10);
T.setHeight(2);
console.log('The base of traingle T is: ' + T.getBase());       //10
console.log('The height of traingle T is: ' + T.getHeight());   //2
console.log('The area of traingle T is: ' + T.getArea());       //10


//accessor_define
function triangle() {
    var _base;
    var _height;
    
    Object.defineProperty(
        this,
        'base',
        {
            get: function() {
                return _base;
            },
            set: function(base) {
                if(typeof base === 'number' && base > 0) {
                    _base = base;
                }
            }
        }
    );
    
    Object.defineProperty(
        this,
        'height',
        {
            get: function() {
                return _height;
            },
            set: function(height) {
                if(typeof height === 'number' && height > 0) {
                    _height = height;
                }
            }
        }
    );
}

triangle.prototype.getArea = function() {
    return this.base * this.height / 2;
};

var t = new triangle();
t.base = 10;
t.height = 2;
console.log('The base of traingle t is: ' + t.base);       //10
console.log('The height of traingle t is: ' + t.height);   //2
console.log('The area of traingle t is: ' + t.getArea());  //10


//namespace
var wings = wings || {};

wings.Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

wings.Member.prototype = {
    getName : function() {
        return this.firstName + ' ' + this.lastName
    }
};

var mem = new wings.Member('Fe', 'Chuang');
console.log(mem.getName()); //Fe Chuang


//namespace_util
function namespace(ns) {
    var names = ns.split('.');
    var parent = window;
    
    for(let i = 0, len = names.length; i < len; i++){
        parent[names[i]] = parent[names[i]] || {};
        parent = parent[names[i]];
    }
    return parent;
}

var my = namespace('Wings.Gihyo.Js.MyApp');
my.Person = function() {};
var p = new my.Person();
console.log(p instanceof Wings.Gihyo.Js.MyApp.Person);  //true