let score = 0;
let currentTask = {};
let correctAnswer = 0;

function generateTask() {
  const num1 = Math.floor(Math.random() * 10) + 1; // Випадкове число від 1 до 10
  const num2 = Math.floor(Math.random() * 10) + 1; // Випадкове число від 1 до 10
  correctAnswer = num1 * num2;
  currentTask = { num1, num2 };
  document.getElementById("task").innerText = `Завдання: ${num1} x ${num2}`;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);

  if (isNaN(userAnswer)) {
    document.getElementById("result").innerText = "Будь ласка, введіть число.";
    return;
  }

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("result").innerText = "Правильно!";
  } else {
    document.getElementById(
      "result"
    ).innerText = `Неправильно! Правильна відповідь: ${correctAnswer}`;
  }

  document.getElementById("score").innerText = score;
  document.getElementById("answer").value = ""; // Очищення поля для відповіді
}

function nextTask() {
  document.getElementById("result").innerText = ""; // Очищення результату
  generateTask(); // Генеруємо нове завдання
}

// Генерація першого завдання при завантаженні сторінки
window.onload = function () {
  generateTask();
};
