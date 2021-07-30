//Prototype-based
{
    let Member = function() {};
    let mem = new Member();
}
{
    let Member = function(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.getName = function() {
            return this.firstName + ' ' + this.lastName;
        }
    };
    var mem = new Member('Fe','Chuang');
    console.log(mem.getName()); //Chuang Fe
}


//dymanic
{
    let Member = function(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    let mem = new Member('Fe','Chuang');
    mem.getName = function() {
        return this.firstName + ' ' + this.lastName;
    }
    
    console.log(mem.getName()); //Chuang Fe
    
//    var mem2 = new Member('Bill','Gates');
//    console.log(mem2.getName());    mem2.getName is not a function
}


//call
var data = 'Global data';
var obj1 = { data: 'obj1 data' };
var obj2 = { data: 'obj2 data' };

function hoge() {
    console.log(this.data);
}

hoge.call(null);    //Global data
hoge.call(obj1);    //obj1 data
hoge.call(obj2);    //obj2 data


//call_arguments
function fe() {
    var args = Array.prototype.slice.call(arguments);
    //let args = Array.from(arguments);
    console.log(args.join('/'));
}

fe('Angular', 'React', 'Backbone'); //Angular/React/Backbone


//no_constructor
var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var m = Member('Fe', 'Chuang');
console.log(m);         //undefined
console.log(firstName); //Fe
//console.log(m.firstName); Cannot read property 'firstName' of undefined

{
    let Member = function(firstName, lastName) {
        if(!(this instanceof Member)) {
            return new Member(firstName, lastName);
        }
        this.first_Name = firstName;
        this.last_Name = lastName;
    };
    let n = Member('Fe', 'Chuang');
    console.log(n);             //Member {firstName: "Fe", lastName: "Chuang"}
    //console.log(firstName_);  firstName_ is not defined
    console.log(n.first_Name);   //Fe
}