var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];


console.log(ary1.length);                //6
console.log(Array.isArray(ary1));        //true
console.log(ary1.toString());            //Sato,Takae,Osada,Hio,Saitoh,Sato
console.log(ary1.indexOf('Sato'));       //0
console.log(ary1.lastIndexOf('Sato'));   //5

var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];
var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

console.log(ary1.concat(ary2));  
//["Sato", "Takae", "Osada", "Hio", "Saitoh", "Sato", "Yabuki", "Aoki", "Moriyama", "Yamada"]


var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato']
console.log(ary1.join('/'));     //Sato/Takae/Osada/Hio/Saitoh/Sato
console.log(ary1.slice(1));      //["Takae", "Osada", "Hio", "Saitoh", "Sato"]
console.log(ary1.slice(1, 2))   //["Takae"]

var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];
console.log(ary1.splice(1, 2, 'Kakeya', 'Yamaguchi'));   //["Takae", "Osada"]
console.log(ary1);   //["Sato", "Kakeya", "Yamaguchi", "Hio", "Saitoh", "Sato"]
console.log(ary1.copyWithin(1, 3, 5));   //["Sato", "Hio", "Saitoh", "Hio", "Saitoh", "Sato"]
console.log(ary1);   //["Sato", "Hio", "Saitoh", "Hio", "Saitoh", "Sato"]
var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];
console.log(ary2.fill('Suzuki', 1, 3));  //["Yabuki", "Suzuki", "Suzuki", "Yamada"]
console.log(ary2);   //["Yabuki", "Suzuki", "Suzuki", "Yamada"]
console.log(Array.of(20,40,60)); //[20, 40, 60]


var ary1 = ["Sato", "Hio", "Saitoh", "Hio", "Saitoh", "Sato"]
console.log(ary1.pop()); //Sato
console.log(ary1);       //["Sato", "Hio", "Saitoh", "Hio", "Saitoh"]
console.log(ary1.push('Kondo')); //6
console.log(ary1);       //["Sato", "Hio", "Saitoh", "Hio", "Saitoh", "Kondo"]
console.log(ary1.shift());  //Sato
console.log(ary1);       //["Hio", "Saitoh", "Hio", "Saitoh", "Kondo"]
console.log(ary1.unshift('Ozawa','Kuge'));  //7
console.log(ary1);   //["Ozawa", "Kuge", "Hio", "Saitoh", "Hio", "Saitoh", "Kondo"]

var ary1 = ["Ozawa", "Kuge", "Hio", "Saitoh", "Hio", "Saitoh", "Kondo"];
console.log(ary1.reverse());    //["Kondo", "Saitoh", "Hio", "Saitoh", "Hio", "Kuge", "Ozawa"]
console.log(ary1);              //["Kondo", "Saitoh", "Hio", "Saitoh", "Hio", "Kuge", "Ozawa"]
console.log(ary1.sort())    //["Hio", "Hio", "Kondo", "Kuge", "Ozawa", "Saitoh", "Saitoh"]
console.log(ary1)           //["Hio", "Hio", "Kondo", "Kuge", "Ozawa", "Saitoh", "Saitoh"]