// callback_foreach
var data =[2, 3, 4, 5];
data.forEach(function(value,index,array){
    console.log(value * value);
});
/*
4
9
16
25
*/

// callback_map
var data = [2, 3, 4, 5];
var result = data.map(function(value, index, array){
   return value * value; 
});
console.log(result) //[4, 9, 16, 25]

// callback_some
var data = [4, 9, 16, 25];
var result = data.some(function(value, index, array){
    return value % 3 === 0;
});

if(result){
    console.log('發現3的倍數');
}
else{
    console.log('沒有發現3的倍數');
}

// callback_filter
var data = [4, 9, 16, 25]
var result = data.filter(function(value, index, array){
    return value % 2 === 1;
});
console.log(result) //[9, 25]

// sort
var ary = [5, 25, 10];
console.log(ary.sort()) //[10, 25, 5]
console.log(ary.sort(function(x, y){
    return x - y;
}));                    //[5, 10, 25]

// sort_clazz
var classes = ['部長','課長','主任','組長'];
var members = [
    { name: '鈴木清子', clazz: '主任' },
    { name: '山口久雄', clazz: '部長' },
    { name: '井上太郎', clazz: '組長' },
    { name: '和田知美', clazz: '課長' },
    { name: '小森雄太', clazz: '組長' },
];
console.log(members.sort(function(x, y){
    return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);   
}));
/*
[
    { name: '山口久雄', clazz: '部長' },
    { name: '和田知美', clazz: '課長' },
    { name: '鈴木清子', clazz: '主任' },
    { name: '井上太郎', clazz: '組長' },
    { name: '小森雄太', clazz: '組長' },
];
*/
