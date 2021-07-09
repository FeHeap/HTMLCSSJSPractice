let sym1 = Symbol('sym');
let sym2 = Symbol('sym');
console.log(typeof(sym1));      //symbol
console.log(sym1.toString());   //Symbol(sym)
console.log(sym1 === sym2);     //false

//convert
/*
console.log(sym1 + ''); //Cannot convert a Symbol value to a string
console.log(sym1 - 0);  //Cannot convert a Symbol value to a number
*/
console.log(typeof(!!sym1)); //boolean