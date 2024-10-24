// Ініціалізація змінних для часу
let seconds = 0;
let minutes = 0;
let hours = 0;

// Елементи для відображення часу
const secondDisplay = document.getElementById('second');
const minuteDisplay = document.getElementById('minute');
const hourDisplay = document.getElementById('hour');

// Елементи для контролю відображення хвилин і годин
const minuteContainer = document.getElementById('minutes');
const hourContainer = document.getElementById('hours');

// Функція для оновлення секунд
function updateSeconds() {
    seconds++;

    // Перевірка: якщо пройшла хвилина
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        // Відображення хвилин
        minuteContainer.classList.remove('hidden');
        minuteDisplay.textContent = minutes;

        // Перевірка: якщо пройшла година
        if (minutes === 60) {
            minutes = 0;
            hours++;
            // Відображення годин
            hourContainer.classList.remove('hidden');
            hourDisplay.textContent = hours;
        }
    }

    // Оновлення відображення секунд
    secondDisplay.textContent = seconds;
}

// Запуск оновлення кожну секунду
setInterval(updateSeconds, 1000);
