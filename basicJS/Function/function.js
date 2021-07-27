//function
function getTriangle(base, height){
    return base * height / 2;
}

console.log('三角形面積' + getTriangle(5, 6)); //角形面積15


//function obj
var getTriangle = new Function('base', 'height', 'return base * height / 2;');
console.log('三角形面積' + getTriangle(5, 6)); //角形面積15

var param = 'height, width';
var formula = 'return height * width / 2;';
var diamond = new Function(param, formula);
console.log('菱形面積' + diamond(5, 2)); //菱形面積5


//literal
var getTriangle = function(base, height) {
    return base * height / 2;
};

console.log('三角形面積' + getTriangle(5, 2)); //三角形面積5


//arrow
var getTriangle = (base, height) => {
    return base * height / 2;
};

console.log('三角形面積' + getTriangle(5, 2)); //三角形面積5


//return
var getTriangle = function(base, height) {
    return
    base * height / 2;
};

console.log('三角形面積' + getTriangle(5, 2)); //三角形面積undefined


//data
var getTriangle = function(base, height) {
    return base * height / 2;
};

console.log(getTriangle(5, 2));  //5
getTriangle = 0;
console.log(getTriangle);    //0

var getTriangle = function(base, height) {
    return base * height / 2;
};

console.log(getTriangle);
/*
ƒ (base, height) {
    return base * height / 2;
}
*/


//static
console.log('三角形面積' + getATriagle(5,2)); //三角形面積5

function getATriagle(base, height){
    return base * height / 2;
}

console.log('三角形面積' + getaTriagle(5, 2)); //getaTriagle is not a function

var getaTriagle = function(base, height){
    return base * height / 2;
}