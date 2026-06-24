"use strict";

/* Блок 1 */
var a1 = 10;
alert(a1);
a1 = 20;
alert(a1);
/* Блок 2 */

var iphoneYear = 2007;
console.log(iphoneYear);
/* Блок 3 */

var jsCreator = "Брендан Айк";
alert(jsCreator);
/* Блок 4 */

var a4 = 10;
var b4 = 2;
alert(a4 + b4); // сумма: 12

alert(a4 - b4); // разность: 8

alert(a4 * b4); // произведение: 20

alert(a4 / b4); // частное: 5

/* Блок 5 */

var result = Math.pow(2, 5);
alert(result);
/* Блок 6 */

var a6 = 9;
var b6 = 2;
var remainder = a6 % b6;
alert(remainder);
/* Блок 7 */

var num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
/* Блок 8 */

var age = prompt("Сколько вам лет?");
alert(age);
/* Блок 9 */

var user = {
  name: "Наталья",
  age: 28,
  isAdmin: true
};
console.log(user);
/* Блок 10 */

var name = prompt("Как вас зовут?");

if (name !== null) {
  alert("\u041F\u0440\u0438\u0432\u0435\u0442, ${name}!");
} else {
  alert("Вы отменили ввод имени.");
}