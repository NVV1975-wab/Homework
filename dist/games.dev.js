"use strict";

// --- ИГРА: ПЕРЕВЕРНИ ТЕКСТ ---
function initReverseGame() {
  var btnReverse = document.getElementById('btn-reverse');
  var panel = document.getElementById('reverse-game-panel');
  var input = document.getElementById('reverse-input');
  var submitBtn = document.getElementById('reverse-submit-btn');
  var result = document.getElementById('reverse-result');
  var restartBtn = document.getElementById('reverse-restart-btn');
  if (!btnReverse || !panel) return;

  function reverseText(text) {
    return text.split('').reverse().join('');
  }

  btnReverse.addEventListener('click', function (e) {
    e.preventDefault();
    panel.style.display = 'block';
    btnReverse.style.display = 'none';
    input.value = '';
    result.textContent = '';
    restartBtn.style.display = 'none';
    input.focus();
  });

  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      var text = input.value.trim();

      if (!text) {
        result.textContent = 'Пожалуйста, введите какой-нибудь текст.';
        result.style.color = '#d9534f';
        return;
      }

      result.textContent = reverseText(text);
      result.style.color = '#333';
      restartBtn.style.display = 'inline-block';
    });
  }

  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (submitBtn) submitBtn.click();
      }
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', function () {
      input.value = '';
      result.textContent = '';
      restartBtn.style.display = 'none';
      input.focus();
    });
  }
} // --- ВИКТОРИНА ---


function runQuiz() {
  var quiz = [{
    question: "Какой цвет у неба?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2
  }, {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2
  }, {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2
  }];
  var score = 0;

  for (var _i = 0, _quiz = quiz; _i < _quiz.length; _i++) {
    var q = _quiz[_i];
    var questionText = "".concat(q.question, "\n\n").concat(q.options.join('\n'));
    var userInput = prompt(questionText);

    if (userInput === null) {
      alert('Игра прервана.');
      return;
    }

    var userAnswer = parseInt(userInput.trim(), 10);

    if (isNaN(userAnswer)) {
      alert('Пожалуйста, вводите только номер варианта (1, 2 или 3).');
      continue;
    }

    if (userAnswer === q.correctAnswer) {
      score++;
    }
  }

  alert("\u0412\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043D\u0430 ".concat(score, " \u0438\u0437 ").concat(quiz.length, " \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432."));
} // --- УГАДАЙ ЧИСЛО ---


var secretNumber;
var attempts;

function startGuessGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  var guessMessage = document.getElementById('guess-message');
  var guessAttempts = document.getElementById('guess-attempts');
  var guessInput = document.getElementById('guess-input');
  var guessSubmitBtn = document.getElementById('guess-submit-btn');
  var guessRestartBtn = document.getElementById('guess-restart-btn');
  var gamePanel = document.getElementById('guess-game-panel');
  var guessGameButton = document.getElementById('btn-guess');
  if (!guessMessage || !guessInput) return;
  guessMessage.textContent = 'Я загадал число от 1 до 100.';
  guessAttempts.textContent = '';
  guessInput.value = '';
  guessInput.disabled = false;
  guessSubmitBtn.disabled = false;
  guessRestartBtn.style.display = 'none';
  guessGameButton.style.display = 'none';
  gamePanel.style.display = 'block';
  guessInput.focus();
}

function checkGuess() {
  var guessInput = document.getElementById('guess-input');
  var guessMessage = document.getElementById('guess-message');
  var guessAttempts = document.getElementById('guess-attempts');
  var guessSubmitBtn = document.getElementById('guess-submit-btn');
  var guessRestartBtn = document.getElementById('guess-restart-btn');
  var raw = guessInput.value.trim();
  var guess = Number(raw);

  if (isNaN(guess)) {
    guessMessage.textContent = 'Пожалуйста, введи целое число.';
    return;
  }

  if (guess < 1 || guess > 100) {
    guessMessage.textContent = 'Число должно быть от 1 до 100.';
    return;
  }

  attempts++;
  guessAttempts.textContent = "\u041F\u043E\u043F\u044B\u0442\u043E\u043A: ".concat(attempts);

  if (guess === secretNumber) {
    guessMessage.textContent = "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E! \u042D\u0442\u043E \u0447\u0438\u0441\u043B\u043E ".concat(secretNumber, "!");
    endGame(true);
  } else if (guess < secretNumber) {
    guessMessage.textContent = 'Загаданное число больше. Попробуй ещё раз.';
  } else {
    guessMessage.textContent = 'Загаданное число меньше. Попробуй ещё раз.';
  }

  guessInput.value = '';
  guessInput.focus();
}

function endGame(isWin) {
  var guessInput = document.getElementById('guess-input');
  var guessSubmitBtn = document.getElementById('guess-submit-btn');
  var guessRestartBtn = document.getElementById('guess-restart-btn');
  guessInput.disabled = true;
  guessSubmitBtn.disabled = true;
  guessRestartBtn.style.display = 'inline-block';
} // --- ПРОСТАЯ АРИФМЕТИКА ---


function generateProblem() {
  var operators = ['+', '-', '*', '/'];
  var opIndex = Math.floor(Math.random() * operators.length);
  var operator = operators[opIndex];
  var a, b, result;

  if (operator === '+') {
    a = Math.floor(Math.random() * 50) + 1;
    b = Math.floor(Math.random() * 50) + 1;
    result = a + b;
  } else if (operator === '-') {
    a = Math.floor(Math.random() * 50) + 1;
    b = Math.floor(Math.random() * a) + 1;
    result = a - b;
  } else if (operator === '*') {
    a = Math.floor(Math.random() * 12) + 1;
    b = Math.floor(Math.random() * 12) + 1;
    result = a * b;
  } else if (operator === '/') {
    b = Math.floor(Math.random() * 12) + 1;
    result = Math.floor(Math.random() * 12) + 1;
    a = b * result;
  }

  return {
    question: "".concat(a, " ").concat(operator, " ").concat(b),
    answer: result
  };
}

function askAndCheck() {
  var problem = generateProblem();
  var userInput = prompt("\u0420\u0435\u0448\u0438 \u043F\u0440\u0438\u043C\u0435\u0440: ".concat(problem.question));

  if (userInput === null) {
    console.log('Пользователь отменил ввод.');
    return;
  }

  var userAnswer = Number(userInput);

  if (isNaN(userAnswer)) {
    alert('Пожалуйста, введи число.');
    return;
  }

  if (userAnswer === problem.answer) {
    alert("\u0412\u0435\u0440\u043D\u043E! \u041E\u0442\u0432\u0435\u0442: ".concat(problem.answer));
  } else {
    alert("\u041E\u0448\u0438\u0431\u043A\u0430. \u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442: ".concat(problem.answer));
  }
}

function initRPSGame() {
  var btnRPS = document.getElementById('btn-rps');
  var panel = document.getElementById('rps-game-panel');
  var messageEl = document.getElementById('rps-message');
  var resultEl = document.getElementById('rps-result');
  var playBtn = document.getElementById('rps-play-btn');
  var closeBtn = document.getElementById('rps-close-btn');
  if (!btnRPS || !panel) return;
  var options = ['камень', 'ножницы', 'бумага'];

  function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  function determineWinner(user, computer) {
    if (user === computer) {
      return 'ничья';
    }

    if (user === 'камень' && computer === 'ножницы' || user === 'ножницы' && computer === 'бумага' || user === 'бумага' && computer === 'камень') {
      return 'победа';
    }

    return 'поражение';
  }

  function startRound() {
    var userInput = prompt('Выберите: камень, ножницы или бумага');

    if (!userInput) {
      messageEl.textContent = 'Игра прервана.';
      resultEl.textContent = '';
      playBtn.style.display = 'none';
      closeBtn.style.display = 'inline-block';
      return;
    }

    var userChoice = userInput.trim().toLowerCase(); // Проверка ввода

    if (!options.includes(userChoice)) {
      messageEl.textContent = 'Неверный ввод. Пожалуйста, выберите: камень, ножницы или бумага.';
      resultEl.textContent = '';
      playBtn.style.display = 'inline-block';
      closeBtn.style.display = 'none';
      return;
    }

    var computerChoice = getComputerChoice();
    var outcome = determineWinner(userChoice, computerChoice);
    var msg = "\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438: ".concat(userChoice, ". \u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u0431\u0440\u0430\u043B: ").concat(computerChoice, ".");
    var res = '';

    if (outcome === 'победа') {
      res = '🎉 Победа!';
      messageEl.style.color = '#28a745';
    } else if (outcome === 'поражение') {
      res = '😕 Поражение.';
      messageEl.style.color = '#dc3545';
    } else {
      res = '🤝 Ничья.';
      messageEl.style.color = '#ffc107';
    }

    messageEl.textContent = msg;
    resultEl.textContent = res;
    playBtn.style.display = 'inline-block';
    closeBtn.style.display = 'inline-block';
  }

  btnRPS.addEventListener('click', function (e) {
    e.preventDefault();
    panel.style.display = 'block';
    btnRPS.style.display = 'none';
    messageEl.textContent = '';
    resultEl.textContent = '';
    messageEl.style.color = '';
    playBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
    startRound();
  });
  playBtn.addEventListener('click', function () {
    startRound();
  });
  closeBtn.addEventListener('click', function () {
    panel.style.display = 'none';
    btnRPS.style.display = 'inline-block';
    messageEl.textContent = '';
    resultEl.textContent = '';
  });
} // --- ПОДКЛЮЧАЕМ ОБРАБОТЧИКИ ---


document.addEventListener('DOMContentLoaded', function () {
  // Угадай число
  var btnGuess = document.getElementById('btn-guess');

  if (btnGuess) {
    btnGuess.addEventListener('click', function (e) {
      e.preventDefault();
      startGuessGame();
    });
  } // Простая арифметика


  var btnArithmetic = document.getElementById('btn-arithmetic');

  if (btnArithmetic) {
    btnArithmetic.addEventListener('click', function (e) {
      e.preventDefault();
      askAndCheck();
    });
  } // Викторина


  var btnQuiz = document.getElementById('btn-quiz');

  if (btnQuiz) {
    btnQuiz.addEventListener('click', function (e) {
      e.preventDefault();
      runQuiz();
    });
  } // Обработчики для кнопок внутри панели «Угадай число»


  var guessSubmitBtn = document.getElementById('guess-submit-btn');
  var guessRestartBtn = document.getElementById('guess-restart-btn');
  var guessInput = document.getElementById('guess-input');

  if (guessSubmitBtn) {
    guessSubmitBtn.addEventListener('click', checkGuess);
  }

  if (guessRestartBtn) {
    guessRestartBtn.addEventListener('click', startGuessGame);
  }

  if (guessInput) {
    guessInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        checkGuess();
      }
    });
  } // Инициализация игры «Переверни текст»


  initReverseGame(); // Инициализация «Камень, ножницы, бумага»

  initRPSGame();
}); // --- ГЕНЕРАТОР СЛУЧАЙНЫХ ЦВЕТОВ ---

function initColorGame() {
  var btnColor = document.getElementById('btn-color');
  var btnGenerate = document.getElementById('color-btn');
  var panel = document.getElementById('color-game-panel');
  var displayText = document.getElementById('color-display');
  if (!btnColor || !panel) return; // Функция генерации случайного  цвета

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  } //  функция для определения цвета текста 


  function getContrastColor(hexColor) {
    var r = parseInt(hexColor.substr(1, 2), 16);
    var g = parseInt(hexColor.substr(3, 2), 16);
    var b = parseInt(hexColor.substr(5, 2), 16); // Формула яркости

    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#000000' : '#ffffff';
  } //  открытие игры


  btnColor.addEventListener('click', function (e) {
    e.preventDefault();
    panel.style.display = 'block';
    btnColor.style.display = 'none'; // Скрываем кнопку "Играть!"

    displayText.textContent = 'Нажми кнопку ниже, чтобы изменить фон!';
  }); //  генерация цвета при клике

  if (btnGenerate) {
    btnGenerate.addEventListener('click', function () {
      var newColor = getRandomColor(); //  фон всей страницы

      document.body.style.backgroundColor = newColor; //  цвет самой кнопки 

      btnGenerate.style.backgroundColor = newColor;
      btnGenerate.style.color = getContrastColor(newColor);
    });
  }
} // Вызов всех функций при загрузке страницы 


document.addEventListener('DOMContentLoaded', function () {
  initReverseGame();
  initColorGame();
});