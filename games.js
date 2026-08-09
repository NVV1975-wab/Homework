// --- ИГРА: ПЕРЕВЕРНИ ТЕКСТ ---


function initReverseGame() {
  const btnReverse = document.getElementById('btn-reverse');
  const panel = document.getElementById('reverse-game-panel');
  const input = document.getElementById('reverse-input');
  const submitBtn = document.getElementById('reverse-submit-btn');
  const result = document.getElementById('reverse-result');
  const restartBtn = document.getElementById('reverse-restart-btn');

  if (!btnReverse || !panel) return;

  function reverseText(text) {
    return text.split('').reverse().join('');
  }

  btnReverse.addEventListener('click', (e) => {
    e.preventDefault();
    panel.style.display = 'block';
    btnReverse.style.display = 'none';
    input.value = '';
    result.textContent = '';
    restartBtn.style.display = 'none';
    input.focus();
  });

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const text = input.value.trim();
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
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (submitBtn) submitBtn.click();
      }
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      input.value = '';
      result.textContent = '';
      restartBtn.style.display = 'none';
      input.focus();
    });
  }
}


// --- ВИКТОРИНА ---
function runQuiz() {
  const quiz = [
    {
      question: "Какой цвет у неба?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
    }
  ];

  let score = 0;

  for (const q of quiz) {
    const questionText = `${q.question}\n\n${q.options.join('\n')}`;
    const userInput = prompt(questionText);

    if (userInput === null) {
      alert('Игра прервана.');
      return;
    }

    const userAnswer = parseInt(userInput.trim(), 10);

    if (isNaN(userAnswer)) {
      alert('Пожалуйста, вводите только номер варианта (1, 2 или 3).');
      continue;
    }

    if (userAnswer === q.correctAnswer) {
      score++;
    }
  }
  alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}


// --- УГАДАЙ ЧИСЛО ---

let secretNumber;
let attempts;

function startGuessGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  const guessMessage = document.getElementById('guess-message');
  const guessAttempts = document.getElementById('guess-attempts');
  const guessInput = document.getElementById('guess-input');
  const guessSubmitBtn = document.getElementById('guess-submit-btn');
  const guessRestartBtn = document.getElementById('guess-restart-btn');
  const gamePanel = document.getElementById('guess-game-panel');
  const guessGameButton = document.getElementById('btn-guess');

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
  const guessInput = document.getElementById('guess-input');
  const guessMessage = document.getElementById('guess-message');
  const guessAttempts = document.getElementById('guess-attempts');
  const guessSubmitBtn = document.getElementById('guess-submit-btn');
  const guessRestartBtn = document.getElementById('guess-restart-btn');

  const raw = guessInput.value.trim();
  const guess = Number(raw);

  if (isNaN(guess)) {
    guessMessage.textContent = 'Пожалуйста, введи целое число.';
    return;
  }

  if (guess < 1 || guess > 100) {
    guessMessage.textContent = 'Число должно быть от 1 до 100.';
    return;
  }

  attempts++;
  guessAttempts.textContent = `Попыток: ${attempts}`;

  if (guess === secretNumber) {
    guessMessage.textContent = `Поздравляю! Это число ${secretNumber}!`;
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
  const guessInput = document.getElementById('guess-input');
  const guessSubmitBtn = document.getElementById('guess-submit-btn');
  const guessRestartBtn = document.getElementById('guess-restart-btn');

  guessInput.disabled = true;
  guessSubmitBtn.disabled = true;
  guessRestartBtn.style.display = 'inline-block';
}


// --- ПРОСТАЯ АРИФМЕТИКА ---

function generateProblem() {
  const operators = ['+', '-', '*', '/'];
  const opIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[opIndex];

  let a, b, result;

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
    question: `${a} ${operator} ${b}`,
    answer: result
  };
}

function askAndCheck() {
  const problem = generateProblem();
  const userInput = prompt(`Реши пример: ${problem.question}`);

  if (userInput === null) {
    console.log('Пользователь отменил ввод.');
    return;
  }

  const userAnswer = Number(userInput);

  if (isNaN(userAnswer)) {
    alert('Пожалуйста, введи число.');
    return;
  }

  if (userAnswer === problem.answer) {
    alert(`Верно! Ответ: ${problem.answer}`);
  } else {
    alert(`Ошибка. Правильный ответ: ${problem.answer}`);
  }
}

function initRPSGame() {
  const btnRPS = document.getElementById('btn-rps');
  const panel = document.getElementById('rps-game-panel');
  const messageEl = document.getElementById('rps-message');
  const resultEl = document.getElementById('rps-result');
  const playBtn = document.getElementById('rps-play-btn');
  const closeBtn = document.getElementById('rps-close-btn');

  if (!btnRPS || !panel) return;

  const options = ['камень', 'ножницы', 'бумага'];

  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  function determineWinner(user, computer) {
    if (user === computer) {
      return 'ничья';
    }
    if (
      (user === 'камень' && computer === 'ножницы') ||
      (user === 'ножницы' && computer === 'бумага') ||
      (user === 'бумага' && computer === 'камень')
    ) {
      return 'победа';
    }
    return 'поражение';
  }

  function startRound() {
    const userInput = prompt('Выберите: камень, ножницы или бумага');
    if (!userInput) {
      messageEl.textContent = 'Игра прервана.';
      resultEl.textContent = '';
      playBtn.style.display = 'none';
      closeBtn.style.display = 'inline-block';
      return;
    }

    const userChoice = userInput.trim().toLowerCase();

    // Проверка ввода
    if (!options.includes(userChoice)) {
      messageEl.textContent = 'Неверный ввод. Пожалуйста, выберите: камень, ножницы или бумага.';
      resultEl.textContent = '';
      playBtn.style.display = 'inline-block';
      closeBtn.style.display = 'none';
      return;
    }

    const computerChoice = getComputerChoice();
    const outcome = determineWinner(userChoice, computerChoice);

    let msg = `Вы выбрали: ${userChoice}. Компьютер выбрал: ${computerChoice}.`;
    let res = '';

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

  btnRPS.addEventListener('click', (e) => {
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

  playBtn.addEventListener('click', () => {
    startRound();
  });

  closeBtn.addEventListener('click', () => {
    panel.style.display = 'none';
    btnRPS.style.display = 'inline-block';
    messageEl.textContent = '';
    resultEl.textContent = '';
  });
}






// --- ПОДКЛЮЧАЕМ ОБРАБОТЧИКИ ---

document.addEventListener('DOMContentLoaded', () => {
  // Угадай число
  const btnGuess = document.getElementById('btn-guess');
  if (btnGuess) {
    btnGuess.addEventListener('click', (e) => {
      e.preventDefault();
      startGuessGame();
    });
  }

  // Простая арифметика
  const btnArithmetic = document.getElementById('btn-arithmetic');
  if (btnArithmetic) {
    btnArithmetic.addEventListener('click', (e) => {
      e.preventDefault();
      askAndCheck();
    });
  }

  // Викторина
  const btnQuiz = document.getElementById('btn-quiz');
  if (btnQuiz) {
    btnQuiz.addEventListener('click', (e) => {
      e.preventDefault();
      runQuiz();
    });
  }
  

  // Обработчики для кнопок внутри панели «Угадай число»
  const guessSubmitBtn = document.getElementById('guess-submit-btn');
  const guessRestartBtn = document.getElementById('guess-restart-btn');
  const guessInput = document.getElementById('guess-input');

  if (guessSubmitBtn) {
    guessSubmitBtn.addEventListener('click', checkGuess);
  }

  if (guessRestartBtn) {
    guessRestartBtn.addEventListener('click', startGuessGame);
  }

  if (guessInput) {
    guessInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        checkGuess();
      }
    });
  }

  // Инициализация игры «Переверни текст»
  initReverseGame();
    // Инициализация «Камень, ножницы, бумага»
  initRPSGame();
});
