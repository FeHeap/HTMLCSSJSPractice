//chain
var Animal = function() {};
Animal.prototype = {
    walk : function() {
        console.log("TocoToco...");
    }
}

var Dog = function() {
    Animal.call(this);
};
Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    console.log('WanWan!');
};

var d = new Dog();
d.walk();   //TocoToco...
d.bark();   //WanWan!


//chain_dynamic
var Animal = function() {};
Animal.prototype = {
    walk : function() {
        console.log("TocoToco...");
    }
};

var SuperAnimal = function() {};
SuperAnimal.prototype = {
    walk : function() {
        console.log('DaDaDaDaDa!');
    }
};

var Dog = function() {};
Dog.prototype = new Animal();
var d1 = new Dog();
d1.walk();  //TocoToco...

Dog.prototype = new SuperAnimal();
var d2 = new Dog();
d2.walk();  //DaDaDaDaDa!
d1.walk();  //TocoToco...


//obj_type
var Animal = function() {};
var Hamster = function() {};
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();
console.log(a.constructor == Animal);   //true
console.log(h.constructor == Animal);   //true
console.log(h.constructor == Hamster);  //false
console.log(h instanceof Animal);   //true
console.log(h instanceof Hamster);  //true
console.log(Hamster.prototype.isPrototypeOf(h));    //true
console.log(Animal.prototype.isPrototypeOf(h));     //true


//obj_in
var obj = { hoge: function(){}, foo: function(){}};

console.log('hoge' in obj); //true
console.log('piyo' in obj); //false