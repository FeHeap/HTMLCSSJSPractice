var obj = { x:1, y:2, z:3 };
console.log(obj.valueOf());     //{x: 1, y: 2, z: 3}

var obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3;
console.log(obj2.valueOf());    //{x: 1, y: 2, z: 3}

var obj3 = Object.create(Object.prototype, {
    x: { value: 1, writable: true, configurable: true, enumerable: true },
    y: { value: 2, writable: true, configurable: true, enumerable: true },
    z: { value: 3, writable: true, configurable: true, enumerable: true },
    }
);
console.log(obj3.valueOf());    //{x: 1, y: 2, z: 3}

var obj4 = {};  //inherit Object object
console.log(obj4.valueOf());    //{}

var obj5 = Object.create(null); //won't inherit Object object
console.log(obj5);  //{}