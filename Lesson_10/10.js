//Задание 1
function filterNumbersArr(numbers) {
    var newArr = numbers.filter(function (el) {
        return el > 0
    });
    return newArr
}

filterNumbersArr([-1, 0, 2, 34, -2]);


// Задание 2
function returnPositive(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            break
        }
    }
    return arr[i]
}

console.log(returnPositive([-1, 0, 2, 34, -2]));

// Задание 3
var str = 'шалаш';

function isPalindrom(str) {
    return str.split('').reverse().join().toLowerCase() === str.split('').join().toLowerCase();
}

isPalindrom(str);

// или так:
var str = 'шалаш';

function isPalindrom(str) {
    str = str.toLowerCase();
    for (i = 0; i < 1 / 2 * str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

isPalindrom(str);

//Задание 4
function isAnagram(str1, str2) {
    return str1.split('').sort().join() === str2.split('').sort().join()
}

// Задание 5
function divideArr(arr, param) {
    var newArr = []
    for (i = 0; i < arr.length; i += param) {
        newArr[newArr.length] = arr.slice(i, i + param);
    }
    console.log(newArr);
    return newArr
}

divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]


