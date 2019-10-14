// Задание 1
var x = +prompt('Введите число'),
    n = +prompt('Введите степень'),
    result = x;

if (n<1) {
  alert('Степень должна быть больше 1')
}
else {
  alert (pow(x,n))
}

function pow(x,n) {
  for (i=1; i<n; i++) {
    result *= x
  }
 return result;
}

// Задание 2 Цикл
function sumTo(n) {
  result = 0;
  for (i=n; i>=1; i--) {
    result += i;
  }
  return result;
}
alert (sumTo(100));

//Задание 2 рекурсия
function sumTo(n) {
  if (n==1) return 1;
  else return n += sumTo(n - 1);
}
alert (sumTo(100));

// Задание 2 арифметическая прогрессия
function sumTo(n) {
  return (n + 1) / 2 * n;
}
alert( sumTo(100) );

// арифметическая прогрессия (самый быстрый т.к. меньше всего действий)
// рекурсия (самый медленный, так как приходится тратить ресурсы на организацию вложенных вызовов)

// Глубина рекурсии ограничена 10000 вызовов, поэтому нет, но некоторые интерпретаторы поддерживают "оптимизацию хвостовой рекурсии" и в них сработает вызов sumTo(100000)

//Задание 3
function treeSum(arr) {
  var result = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].length>=1) {
      result += treeSum(arr[i])
    }
    else if (isFinite(arr[i])){
      result += +arr[i];
    }
    else if (arr[i].length === 0)  {
      continue}
  }
  return result
}

var array = [5 , 7, [4, [2], 8, [1,3], 2], [9, [] ],1,8];
console.log (treeSum(array));

