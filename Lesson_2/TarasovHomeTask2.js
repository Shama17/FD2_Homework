//Задание 1
var a = +prompt('Введите число', ''),
    b = +prompt('Сколько прибавить', ''),
    c = +prompt('Сколько отнять', ''),
    d = +prompt('На сколько умножить', ''),
    e = +prompt('На сколько разделить', ''),
    formula = 'Формула: (' + a + ' + ' + b + ' - ' + c + ')' + ' * ' + d + ' / ' + e,
    result = (a + b - c) * d / e;
alert(formula + '\r\n' + 'Результат: ' + result);


//Задание 2
var login = prompt('Введите логин'),
    password;
if (login === 'Админ') {
    password = prompt('Введите пароль');
    if (password === 'Чёрный Властелин') {
        alert('Добро пожаловать');
    } else if (password === null) {
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    }
} else if (login === null) {
    alert('Вход отменен');
} else {
    alert('Я вас не знаю');
}

// Задание 3
var message = (login === 'Вася') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' : '';


// Задание 4
var surname = prompt('Введите вашу фамилию'),
    name,
    middlename,
    age,
    sex,
    retiree;

while (surname === '' || !isNaN(surname)) {
    alert('Введите корректные данные');
    surname = prompt('Введите вашу фамилию');
}
name = prompt('Введите ваше имя');
while (name === '' || !isNaN(name)) {
    alert('Введите корректные данные');
    name = prompt('Введите ваше имя');
}
middlename = prompt('Введите ваше отчество');
while (middlename === '' || !isNaN(middlename)) {
    alert('Введите корректные данные');
    middlename = prompt('Введите ваше отчество');
}
age = +prompt('Введите ваш возраст в годах');
while (isNaN(age)) {
    age = +prompt('Введите ваш возраст в годах')
}

if (confirm('Ваш пол - мужской ?') === true) {
    sex = 'Мужской'
} else {
    sex = 'Женский'
}

if ((sex === 'Мужской' && age >= 63) || (sex === 'Женский' && age >= 58)) {
    retiree = 'Да'
} else {
    retiree = 'Нет'
}
alert('Ваше ФИО: ' + surname + ' ' + name + ' ' + middlename + '\r\n' +
    'Ваш возраст в годах: ' + age + '\r\n' +
    'Ваш возраст в днях ' + age * 365 + '\r\n' +
    'Через 5 лет вам будет: ' + (age + 5) + '\r\n' +
    'Ваш пол: ' + sex + '\r\n' +
    'Вы на пенсии: ' + retiree);



