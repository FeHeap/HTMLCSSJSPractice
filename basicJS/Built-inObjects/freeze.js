'use strict';

var PET = { type: '雪白倉鼠', name: '奇拉' };

//Object.preventExtensions(PET); Cannot add property weight, object is not extensible
//Object.seal(PET); Cannot delete property 'type' of #<Object>
//Object.freeze(PET); Cannot assign to read only property 'name' of object '#<Object>'

PET.name = '山田奇拉';

delete PET.type;

PET.weight = 42;

console.log(PET);