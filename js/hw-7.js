// задача 1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//Задача 2

//  положительное ли число
function isPositive(num) {
  return num > 0;
}

//  мужской ли пол у персонажа
function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    
    if (ruleFunction(item)) {
      result.push(item);
    }
  }

  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));


const peopls = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopls, isMale));

//Задача 3

let secondsPassed = 0;
const intervalId = setInterval(() => {
  secondsPassed += 3;
  console.log(new Date().toLocaleString('ru-RU'));

  if (secondsPassed >= 30) {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
  }
}, 3000);

//Задача 4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

//Задача 5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

//delayForSecond(sayHi('Глеб')) не правильно
delayForSecond(() => sayHi('Глеб'));





