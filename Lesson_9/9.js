//Задание 1
function Animal(name) {
    this.name = name;
    this._foodAmount = 0;
}

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();
    if (amount < 50) {
        throw new Error('Слишком мало еды');
    }
    if (amount > 500) {
        throw new Error('Слишком много еды');
    }
    this._foodAmount = amount;
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма')
};

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.'
};

function Cat() {
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.stroke = function () {
    console.log('Гладим кота');
    return this
};

Cat.prototype.catFeed = function () {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
};


//Задание 2
var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var cloneObj = copyObject(initialObj);

function copyObject(obj) {
    var copyObj = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
                copyObj[key] = copyObject(obj[key]);
            } else if (Array.isArray(obj[key])) {
                copyObj[key] = [];
                for (var i = 0; i < obj[key].length; i++) {
                    if (typeof obj[key][i] !== 'object') {
                        copyObj[key].push(obj[key][i]);
                    } else {
                        copyObj[key][i] = copyObject(obj[key][i])
                    }
                }
            } else {
                copyObj[key] = obj[key];

            }
        }
    }
    return copyObj
}

cloneObj.object.object2.array2[1].name = 'Vasya';
cloneObj.array.push(2);

console.log(initialObj);
console.log(cloneObj);


//Задание 3
var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{1:2}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};


var cloneObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{1:2}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }


};

function compareObject(obj, comparedObj) {
    for (var key in obj) {
        if (typeof obj[key] === 'object' || Array.isArray(obj[key])) {
            if (!compareObject(obj[key], comparedObj[key])) {
                return false
            }
        } else if (typeof obj[key] === 'function') {
            if (String(obj[key]) !== String(comparedObj[key])) {
                return false }
        }	else if (comparedObj[key] !== obj[key]) {
            return false;
        }
    }
    return true;

}
console.log(compareObject(initialObj, cloneObj))
