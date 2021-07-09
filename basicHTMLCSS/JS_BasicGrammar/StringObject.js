var str1 = 'ABCABCABC';
console.log(str1.indexOf('ABC'));       //0
console.log(str1.lastIndexOf('ABC'));   //6
console.log(str1.indexOf('ABC',3));     //3
console.log(str1.lastIndexOf('B',5));   //4
console.log(str1.indexOf('DEF'));       //-1
console.log(str1.startsWith('ABC'));    //true
console.log(str1.endsWith('ABC'));      //true
console.log(str1.includes('ABC'));      //true

var str1 = 'ABCABCABC';
var str2 = 'WingsProject';
console.log(str2.charAt(4));    //s
console.log(str2.slice(5,8));   //Pro   #[5,8)
console.log(str2.substring(5,8)); //Pro #[5,8)
console.log(str2.substr(5,3));  //Pro
console.log(str2.split('s'));   //["Wing", "Project"]
console.log(str1.split('C',3)); //["AB", "AB", "AB"]
console.log(str2.charCodeAt(0)); //87
console.log(String.fromCharCode(87,105,110,103)); //Wing

var str3 = '被罵';
console.log(str3.codePointAt(0));           //34987
console.log(String.fromCodePoint(34987));   //被

var str2 = 'WingsProject';
console.log(str2.concat('有限公司')); //WingsProject有限公司
console.log(str2.repeat(2)); //WingsProjectWingsProject
console.log(str2.length);   //12

var str4 = ' wings  \n';
console.log(str4.trim());   //wings


//substring/slice
var str ='WINGSProject';
console.log(str.substring(8,5));    //Pro
console.log(str.slice(8,5));        //
console.log(str.substring(5,-2));    //WINGS
console.log(str.slice(5,-2));        //Proje
console.log(str.slice(5,10));        //Proje


//length---Surrogate Pair
var msg = '𤭢這個特殊字';
console.log(msg.length);    //7
//lenght---kill the problem
var msg = '𤭢這個特殊字';
var num = msg.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length-1;
console.log(msg.length - num);     //6