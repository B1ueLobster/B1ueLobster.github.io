let score = 0;
let correctAnswer = 0;

function generateTask() {
  const num1 = Math.floor(Math.random() * 10) + 1; // Випадкове число від 1 до 10
  const num2 = Math.floor(Math.random() * 10) + 1; // Випадкове число від 1 до 10
  correctAnswer = num1 * num2;

  document.getElementById("task").innerText = `Завдання: ${num1} x ${num2}`;

  const wrongAnswer1 = correctAnswer + Math.floor(Math.random() * 10) + 1;
  const wrongAnswer2 = correctAnswer - Math.floor(Math.random() * 10) - 1;
  const wrongAnswer3 = correctAnswer + Math.floor(Math.random() * 5) - 2;

  const options = [
    correctAnswer,
    wrongAnswer1,
    wrongAnswer2,
    wrongAnswer3,
  ].sort(() => Math.random() - 0.5);

  const radioButtons = document.getElementsByName("answer");
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].value = options[i];
    document.getElementById(`option${i + 1}`).innerText = options[i];
    radioButtons[i].checked = false; // Скидання вибору радіокнопок
  }

  document.getElementById("result").innerText = ""; // Очищення результату
}

function checkAnswer(input) {
  const selectedAnswer = parseInt(input.value);

  if (selectedAnswer === correctAnswer) {
    score++;
    document.getElementById("result").innerText = "Правильно!";
  } else {
    document.getElementById(
      "result"
    ).innerText = `Неправильно! Правильна відповідь: ${correctAnswer}`;
  }

  document.getElementById("score").innerText = score;

  const radioButtons = document.getElementsByName("answer");
  for (let radioButton of radioButtons) {
    radioButton.disabled = true;
  }
}

function nextTask() {
  generateTask();

  const radioButtons = document.getElementsByName("answer");
  for (let radioButton of radioButtons) {
    radioButton.disabled = false;
  }
}

window.onload = function () {
  generateTask();
};
