// Задание 1
var names = ['Vasya', 'Petya', 'Kolya', 'Igor', 'Ivan', 'Maksim'];

function transformArr(arr) {
    return arr.map(function (name) {
        return {name: name}
    });
}

console.log(transformArr(names));

// Задание 2
var arr = ['00', '13', '24']

function transformToTime(arr) {
    return arr.reduce(function (prev, value) {
        return prev + ' : ' + value;
    }, 'Текущее время');
}

console.log(transformToTime(arr));

// Задание 3
var txt = 'Написать чистую функцию, которая будет возвращать количество гласных в переданном тексте';

function numOfVowels(str) {
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    str = str.split('');
    var vowelsSum = 0;
    for (var i = 0; i < vowels.length; i++) {
        vowelsSum += str.filter(function (item) {
            return item === vowels[i];
        }).length
    }
    return vowelsSum;
}
console.log(numOfVowels(txt));

// Задание 4

var txt = 'Если вводное слово. Или вводное сочетание слов? Стоит в начале, или в конце обособленного члена предложения, то оно не отделяется!  От него знаком препинания сли вводное слово или сочетание слов находится внутри обособленного! Члена предложения.';
​
function numOfLetters(str) {
    debugger
    str = str.split(/[!.?]/).filter(function(sentence) {
        if (!!sentence) {
            return sentence}
    })
    var lettersSum = str.map(function (item) {
        item = item.trim().split(/[ ,:;]/)
        return item.reduce(function (sum, elem) {
            return sum + elem.length
        }, 0)
    })
    for (i =0 ; i <str.length; i++) {
        console.log (str[i] + ' -- количество букв в предложении: ' + lettersSum[i])
    }
}
​
console.log(numOfLetters(txt))

// Задание 5


