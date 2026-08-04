/*Задание 1
Дан массив: 
[1, 5, 4, 10, 0, 3].
Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. После вывода значения 10
 в консоль цикл должен прекратить свою работу.*/

let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if (arr[i] === 10) {
        break;
    }
}

/* задание 2 
Дан массив: [1, 5, 4, 10, 0, 3]. Найдите индекс значения 4 в этом массиве.*/

const numbers = [1, 5, 4, 10, 0, 3];
const index = numbers.indexOf(4);
console.log(index);

/*задание 3
 Дан массив чисел: [1, 3, 5, 10, 20].
С помощью метода join выведите элементы массива через пробел (пустую строку ' ').*/

const item = [1, 3, 5, 10, 20];
const result = item.join(" ");
console.log(result);

/*Задание 4
С помощью вложенных циклов создайте многомерный массив вида: 
[[1, 1, 1], [1, 1, 1], [1, 1, 1]].*/

const rows = 3;
const cols = 3;
const matrix = [];
for (let i = 0; i < rows; i++) {
    matrix[i] = [];

    for (let j = 0; j < cols; j++) {
        matrix[i][j] = 1;
    }
}

console.log(matrix);
/*Задание 5
Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.*/

let a = [1, 1, 1];
a.push(2, 2, 2)
console.log(a);

/*Задание 6
Дан массив: [9, 8, 7, 'a', 6, 5].С помощью метода sort отсортируйте массив и удалите букву 
'a'из массива. Затем выведите массив.*/

let letterNumber = [9, 8, 7, 'a', 6, 5];
let filtered = letterNumber.filter(letterNumber => letterNumber !== "a");
let sorted = filtered.sort();
console.log(sorted);

/*Задание 7
Дан массив: 
[9, 8, 7, 6, 5].Попросите пользователя угадать число с помощью метода 
prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в alert
 «Угадал», в противном случае — «Не угадал».*/

/*let riddles = [9, 8, 7, 6, 5];
let input = prompt('Угадай число из массива');

if (input === null) {
    alert('Ты отменил игру.');
} else {
    const guessedRiddles = Number(input); 
    let isFound = false;

    for (let i = 0; i < riddles.length; i++) {
        if (riddles[i] === guessedRiddles) { 
            isFound = true;
            break;
        }
    }

    if (isFound) {
        alert('Угадал!');
    } else {
        alert('Не угадал.');
    }
}

/*Задание 8
Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.*/
const str = 'abcdef';
const line = str.split('');
line.reverse();
const reverseLine = line.join("");
console.log(reverseLine);

/*Задание 9
Дан массив: 
[[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];
console.log(merged);

/*Задание 10
Создайте массив с произвольными числами (диапазон от 1до 10).Переберите его с помощью цикла 
for.В каждой итерации выведите в консоль сумму текущего и следующего элементов масси*/
const numbersArbitrary = [3, 7, 2, 9, 5];

for (let i = 0; i < numbersArbitrary.length - 1; i++) {
    const current = numbersArbitrary[i];
    const next = numbersArbitrary[i + 1];
    const sum = current + next;

    console.log(`Сумма ${current} и ${next} = ${sum}`);

}
/*Задание 11
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.*/

function getSquares(numbers) {
    return numbers.map(num => num * num);
}
const inputSquares = [1, 2, 3, 4, 5];
const resultSquares = getSquares(inputSquares);
console.log(resultSquares);

/*Задание 12
Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.*/

function getWordLengths(words) {
    return words.map(word => word.length);
}
const input = ['яблоко', 'банан', 'киви', 'апельсин'];
const lengths = getWordLengths(input);
console.log(lengths);

/*задание 13
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.*/

function getNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}
const inputgetNegativeNumbers = [3, -1, 7, -5, 0, -2, 10];
const negatives = getNegativeNumbers(inputgetNegativeNumbers);
console.log(negatives);

/*задание 14
Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода 
Math.random()
 в диапазоне от 0 до 10.
В данном массиве найдите все четные значения и добавьте их в новый массив.
 Результат работы программы необходимо вывести в консоль — это будут два массива: исходный
 массив и массив с четными значениями.*/

const originalArray = [];
for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 11);
    originalArray.push(randomNum);
}
const evenNumbers = originalArray.filter(num => num % 2 === 0);
console.log('Исходный массив:', originalArray);
console.log('Чётные значения:', evenNumbers);

/*Задание 15
Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
Math.random() в диапазоне от 1 до 10.Требуется найти среднее арифметическое этих цифр,
 результат программы вывести в консоль.*/

const elements = [];
for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 10) + 1; // от 1 до 10
    elements.push(randomNum);
}
//  сумма
let sum = 0;
for (let i = 0; i < elements.length; i++) {
    sum += elements[i];
}
// среднее арифметическое
const average = sum / elements.length;
console.log('Массив:', elements);
console.log('Среднее арифметическое:', average);