//scope
var scope = 'Global Variable';

function getValue(){
    var scope = 'Local Variable';
    return scope;
}

console.log(getValue());    //Local Variable
console.log(scope);         //Global Variable

var scope = 'Global Variable';

function getAValue(){
    scope = 'Local Variable';
    return scope;
}

console.log(getAValue());   //Local Variable
console.log(scope);         //Local Variable

var scope = 'Global Variable';

function getaValue(){
    console.log(scope);     //undefined
    var scope = 'Local Variable';
    return scope;
}

console.log(getaValue());   //Local Variable
console.log(scope);         //Local Variable


//reference
var value = 10;

function decrementValue(value) {
    value--;
    return value;
}

console.log(decrementValue(100));   //99
console.log(value); //10

var value = [1, 2, 4, 8, 16];
function decrementElement(value) {
    value.pop();
    return value;
}

console.log(decrementElement(value));   //[1, 2, 4, 8]
console.log(value); //[1, 2, 4, 8]


//Scope
if(true){
    var i = 5;
}

console.log(i); //5


//block
(function() {
    var j = 5;
    console.log(j);
}).call(this);

//console.log(j); //j is not defined


//let
if(true) {
    let k = 5;
}

//console.log(k); //k is not defined


//let_block
{
    let m = 5;
    console.log(m); //5
}

//console.log(m); //m is not defined


//let_switch
//switch(x) {
//    case 0:
//        let Value = 'x:0';
//    case 1:
//        let Value = 'x:1';  //Identifier 'Value' has already been declared
//}


//scope
var scope = 'Global Variable';
function checkScope(){
    var scope = 'Local Variable';
    
    var f_lit = function(){return scope;}
    console.log(f_lit());   //Local Variable
    
    var f_con = new Function('return scope;');
    console.log(f_con());   //Global Variable
}

checkScope();