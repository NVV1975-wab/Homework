const getMin = (a, b) => Math.min(a, b);

console.log(getMin(8, 4));
console.log(getMin(6, 6));

//задание 2

function checkEvenOdd(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkEvenOdd());
console.log(checkEvenOdd());

//задание 3

function logSquare(n) {
    const square = n * n;
    console.log(square);
}

logSquare(5); //25   

const result = logSquare(5);
console.log(result);

//задание 4

function correctAge() {
    const input = prompt('Сколько вам лет?');
    const age = Number(input);
    if (isNaN(age)) {
        return 'Вы ввели неправильное значение';
    }
    if (age < 0) {
        return 'Вы ввели неправильное значение';
    } else if (age >= 0 && age <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    }
}
alert(correctAge());

//задание 5


function multiplyNumbers(a, b) {
  // Преобразовала  входные значения в числа
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) {
    return 'Одно или оба значения не являются числом';
  }
  return numA * numB;
}

console.log(multiplyNumbers(3, 4));     
console.log(multiplyNumbers('1', '2'));    
console.log(multiplyNumbers('куку', 2));    

// задание 6

function cubeNumber() {
  const input = prompt('Введите число:');
  const n = Number(input);
  if (isNaN(n)) {
    return 'Переданный параметр не является числом';
  }
  const cube = n ** 3; 
  return `n в кубе равняется ${cube}`;
}

console.log(cubeNumber());

// задание 7

const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

console.log('circle1 площадь:', circle1.getArea());          
console.log('circle1 периметр:', circle1.getPerimeter());     
console.log('circle2 площадь:', circle2.getArea());           
console.log('circle2 периметр:', circle2.getPerimeter()); 