//Задание 1
var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');

//Задание 2
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
// или
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) continue;
    console.log(arr[i]);
}

// Задание 3
function isEmpty(obj) {
    for (var key in obj) {
        if (key) {
            console.log(key);
            return true;
        }
        ;
    }
    ;
    return false;
};

// Задание 4
var arr = [],
    i = 0,
    result = 0;

while (i !== '' && i !== null && !isNaN(i)) {
    i = prompt('Введите число');
    if (!isNaN(+i)) {
        arr.push(+i);
        result = result + +i;
    }
}
alert(result);


// Задание 5*
var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
next : for (var i = 0; i < arr.length; i++) {
    for (j = 2; j < arr[i]; j++) {
        if (arr[i] % j == 0) continue next;
    }
    console.log(arr[i]);
}

