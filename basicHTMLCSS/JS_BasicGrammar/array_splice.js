//array_splice.js
var data = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh'];
console.log(data.splice(3, 2, 'Yamada', 'Suzuki'));  //["Hio", "Saitoh"]
console.log(data);   //["Sato", "Takae", "Osada", "Yamada", "Suzuki"]
console.log(data.splice(3,2));   //["Yamada", "Suzuki"]
console.log(data);   //["Sato", "Takae", "Osada"]
console.log(data.splice(1, 0, 'Tanaka'));    //[]
console.log(data);   //["Sato", "Tanaka", "Takae", "Osada"]