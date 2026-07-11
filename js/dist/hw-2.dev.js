"use strict";

var password = 'пароль';
var userInput = prompt('Введите пароль');

if (userInput === password) {
  alert('Пароль введен верно');
} else {
  alert('Пароль введен неправильно');
}
/* задание 2*/


var c = 2;

if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
/*задание 3*/


var d = 50;
var e = 120;

if (d > 100 || e > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
/*задание 4*/


var a = '2';
var b = '3'; // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:

alert(a + b);
alert(Number(a) + Number(b));
/*задание 5*/

var monthNumber = 12;

if (monthNumber < 1 || monthNumber > 12) {
  console.log('Некорректный номер месяца');
} else {
  var season;

  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      season = 'зима';
      break;

    case 3:
    case 4:
    case 5:
      season = 'весна';
      break;

    case 6:
    case 7:
    case 8:
      season = 'лето';
      break;

    case 9:
    case 10:
    case 11:
      season = 'осень';
      break;
  }

  console.log("\u041C\u0435\u0441\u044F\u0446 \u043D\u043E\u043C\u0435\u0440 ".concat(monthNumber, " \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A \u0441\u0435\u0437\u043E\u043D\u0443: ").concat(season));
}