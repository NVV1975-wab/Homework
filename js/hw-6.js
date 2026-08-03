//задача 1

const userInput = prompt('Введи "js"').toUpperCase();
if (userInput === 'JS') {
    console.log('Верно!');
}

//задача 2


const cocktails = ['Молоко и мёд', 'молоко и орех', 'молоко', 'сливки и клубника', 'сок', 'вода'];

const prefix = `Молоко`;

function filterByPrefix(arr, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    return arr.filter(item => {
        const lowerItem = String(item).toLowerCase();
        return lowerItem.startsWith(lowerPrefix);
    });
}

const milkCocktails = filterByPrefix(cocktails, prefix);
console.log(milkCocktails);

//задача 3


let numbe = 32.58884;

const floorValue = Math.floor(numbe);
const ceilValue = Math.ceil(numbe);
const roundValue = Math.round(numbe);

console.log('До меньшего целого (floor):', floorValue);   
console.log('До большего целого (ceil):', ceilValue);     
console.log('До ближайшего (round):', roundValue);        

console.log('Исходное число:', numbe);  

//задача 4

const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log('Минимальное значение:', min); 
console.log('Максимальное значение:', max); 

//задача 5

function printRandomNumber() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
}


printRandomNumber();

//задача 6

function getRandomNumbers(max) {

  const length = Math.floor(max / 2); // длина массива — в два раза меньше переданного числа
  const result = [];

  for (let i = 0; i < length; i++) {
    // Случайное целое число от 0 до max (включительно)
    const randomNum = Math.floor(Math.random() * (max + 1));
    result.push(randomNum);
  }

  return result;
}

console.log(getRandomNumbers(10)); 
console.log(getRandomNumbers(7));   

//задача 7

const now = new Date();
console.log(now);

//задача 8

const currentDate = new Date();

// Создаём новую дату: копируем текущую и прибавляем 73 дня
const futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);

console.log('Текущая дата:', currentDate.toLocaleDateString('ru-RU'));
console.log('Дата через 73 дня:', futureDate.toLocaleDateString('ru-RU'));


//задача 9

function formatDateAndTime(date) {
  const monthsRu = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  const weekdaysRu = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
  ];

  const day = date.getDate();
  const month = monthsRu[date.getMonth()];
  const year = date.getFullYear();
  const weekday = weekdaysRu[date.getDay()];

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const d = new Date();
console.log(formatDateAndTime(d));


