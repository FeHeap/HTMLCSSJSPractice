let pet = {
    type: '雪白倉鼠',
    name: '奇拉',
    description: {
        birth: '2014-02-15'
    }
};

let pet2 = {
    name: '山田',
    color: '白',
    description: {
        food: '向日葵種子'
    }
};

let pet3 = {
    weight: 42,
    photo: 'http://www.wings.msn.to/img/ham.jpg'
};

let merged = Object.assign({}, pet, pet2, pet3);
console.log(merged);

Object.assign(pet, pet2, pet3);
console.log(pet);