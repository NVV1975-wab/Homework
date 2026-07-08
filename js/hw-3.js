/* задание 1*/

for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

/*задание 2*/

for (let a = 1; a <= 5; a++) {
    console.log(a);

}

/*задание 3*/

for (let b = 7; b <= 22; b++) {
    console.log(b);

}
/*задание 4*/

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (const name in obj) {
    if (obj.hasOwnProperty(name)) {
        const salary = obj[name];
        console.log(`${name} — зарплата ${salary} долларов`);
    }
}

/*задание 5*/

let n = 1000;
let num = 0; // счётчик 

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log('Конечное число:', n);        // 31.25
console.log('Количество итераций:', num); // 5
 /*1‑я итерация: 
1000/2=500
1000/2=500 → num = 1
2‑я итерация: 
500/2=250
500/2=250 → num = 2
3‑я итерация: 
250/2=125
250/2=125 → num = 3
4‑я итерация: 
125/2=62,5
125/2=62,5 → num = 4
5‑я итерация: 
62,5/2=31,25
62,5/2=31,25 → num = 5*/

/*задание 6*/

const firstFriday = 3; // дата первой пятницы месяца 
const daysInMonth = 31;

for (let day = firstFriday; day <= daysInMonth; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}