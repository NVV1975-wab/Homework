//Задание 1. Скрытие и показ текста
/*Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>.

Инструкция:

В HTML создайте заголовок <h1> с текстом и кнопку.
Используйте метод 
querySelector
 для получения ссылок на заголовок и кнопку.
Используйте событие 
click и метод addEventListener, чтобы скрывать и показывать заголовок при нажатии на кнопку.
Как должно работать: нажатие на кнопку «Скрыть» скрывает текст заголовка. Повторное нажатие показывает текст снова.*/

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#main-title');
    const btn = document.querySelector('#btn-change-text');


    btn.addEventListener('click', () => {
        // Переключаем класс hidden: если есть — убираем, если нет — добавляем
        title.classList.toggle('hidden');

        // Меняем текст кнопки для понимания что произойдет
        if (title.classList.contains('hidden')) {
            btn.textContent = 'Показать заголовок';
        } else {
            btn.textContent = 'Скрыть заголовок';
        }
    });
});

/*Задание 2. Изменение стиля элемента
Задача: создайте кнопку, которая изменяет цвет текста в элементе <p>.
Инструкция:
В HTML создайте абзац 
<p> и кнопку. Используйте метод querySelector
 для получения ссылки на абзац и кнопку.
Используйте событие click и метод addEventListener, чтобы изменить стиль элемента, например его цвет.
Как должно работать: нажатие на кнопку «Изменить цвет» делает текст абзаца синим.*/

document.addEventListener('DOMContentLoaded', () => {

  const paragraph = document.querySelector('#text-paragraph');
  const button = document.querySelector('#but-text');

  button.addEventListener('click', () => {
    paragraph.style.color = 'blue';
  });
});
/*Задание 3. Динамическое изменение текста
Задача: создайте кнопку, которая меняет текст в заголовке <h1>.

Инструкция:
В HTML создайте заголовок 
<h1> с текстом и кнопку. Используйте метод querySelector
 для получения ссылки на заголовок и кнопку.Используйте событие 
clickи метод addEventListener, чтобы изменить текст заголовка при нажатии на кнопку.
Как должно работать: нажатие на кнопку «Изменить текст» меняет текст заголовка на «Привет, мир!».*/
document.addEventListener('DOMContentLoaded', () => {
  // Используем querySelector с новыми id
  const heading = document.querySelector('#demo-h1');
  const button = document.querySelector('#demo-change-btn');

  button.addEventListener('click', () => {
    heading.textContent = 'Привет, мир!';
  });
});
/*Задание 4. Поиск и изменение элементов по классу
Задача: найдите все элементы с классом description
 и измените их текст на «Измененный текст».
Инструкция:
В HTML создайте несколько элементов с классом 
description.
Используйте метод 
querySelectorAll
 для поиска всех элементов с этим классом.
Переберите найденные элементы и измените их текстовое содержимое с помощью свойства 
textContent.
Как должно работать: после выполнения скрипта все элементы с классом 
description изменяют свой текст на «Измененный текст».*/
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-change-all');

  btn.addEventListener('click', () => {
    // Находим ВСЕ элементы с классом description
    const elements = document.querySelectorAll('.description');

    // Перебираем их и меняем текст
    elements.forEach((el) => {
      el.textContent = 'Измененный текст';
    });

    console.log(`Изменено элементов: ${elements.length}`);
  });
});
/* задание 6
В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс 
description.
Используйте 
querySelectorAll для поиска всех элементов с классом 
description.
Переберите найденные элементы и измените их текстовое содержимое.
Как должно работать: после выполнения скрипта все элементы с классом 
description изменяют свой текст на «Новый текст».*/
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-change-descript');

  btn.addEventListener('click', () => {
    // Находим ВСЕ элементы с классом description
    const elements = document.querySelectorAll('.descript');

    // Перебираем и меняем текст
    elements.forEach((el) => {
      el.textContent = 'Новый текст';
    });

    console.log(`Изменено элементов: ${elements.length}`);
  });
});

/*Задание 6. Добавление нового элемента в DOM
Задача: создайте кнопку, которая добавляет новый элемент <p> с текстом в конец документа.
Инструкция:
В HTML создайте кнопку.
Используйте метод createElement для создания нового элемента.
Используйте appendChild
 для добавления нового элемента в конец документа при нажатии на кнопку.
Как должно работать: нажатие на кнопку «Добавить элемент» добавляет в конец страницы новый абзац с текстом «Новый абзац».*/
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-add-paragraph');
  const container = document.getElementById('container');

  btn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    newParagraph.className = 'added-paragraph';
    container.appendChild(newParagraph);
  });
});
/*Задание 7. Удаление элемента
Задача: создайте кнопку, которая удаляет первый элемент <p>
 с классом description.
Инструкция:
В HTML создайте несколько абзацев 
<p>, некоторые из них должны иметь класс description.
Используйте метод 
querySelector для поиска первого элемента с классом 
description.
Используйте метод 
remove
 для удаления этого элемента при нажатии на кнопку.
Как должно работать: нажатие на кнопку «Удалить элемент» удаляет первый абзац с классом 
description со страницы.*/
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-remove-first');

  btn.addEventListener('click', () => {
    const elementToRemove = document.querySelector('.descrip');

    if (elementToRemove) {
      elementToRemove.remove();
      console.log('Элемент удалён');
    } else {
      console.warn('Элементов с классом descrip не найдено');
    }
  });
});
