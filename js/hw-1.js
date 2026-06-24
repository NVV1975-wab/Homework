/* Блок 1 */
let a1 = 10;
alert(a1);

a1 = 20;
alert(a1);

/* Блок 2 */
let iphoneYear = 2007;
console.log(iphoneYear);

/* Блок 3 */
let jsCreator = "Брендан Айк";
alert(jsCreator);

/* Блок 4 */
let a4 = 10;
let b4 = 2;

alert(a4 + b4);   // сумма: 12
alert(a4 - b4);   // разность: 8
alert(a4 * b4);   // произведение: 20
alert(a4 / b4);   // частное: 5

/* Блок 5 */
let result = 2 ** 5;
alert(result);

/* Блок 6 */
let a6 = 9;
let b6 = 2;

let remainder = a6 % b6;
alert(remainder);

/* Блок 7 */
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

/* Блок 8 */
let age = prompt("Сколько вам лет?");
alert(age);

/* Блок 9 */
const user = {
  name: "Наталья",
  age: 28,
  isAdmin: true
};
console.log(user);

/* Блок 10 */
let name = prompt("Как вас зовут?");
if (name !== null) {
  alert(`Привет, \${name}!`);
} else {
  alert("Вы отменили ввод имени.");
}
