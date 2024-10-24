// Отримуємо елементи з HTML
const betAmountInput = document.getElementById('betAmount');
const betBtn = document.getElementById('betBtn');
const resultDisplay = document.getElementById('result');

// Обробник натискання на кнопку ставки
betBtn.addEventListener('click', () => {
    const betAmount = parseFloat(betAmountInput.value);  // Отримуємо суму ставки

    // Перевірка на валідність введеної суми
    if (isNaN(betAmount) || betAmount <= 0) {
        resultDisplay.textContent = 'Будь ласка, введіть коректну суму ставки.';
        return;
    }

    // Генеруємо випадкове число від -5 до 5
    const randomNum = Math.floor(Math.random() * 11) - 5;

    // Через 1 секунду виводимо результат
    setTimeout(() => {
        if (randomNum <= 0) {
            // Якщо випадкове число менше або дорівнює 0, користувач програв
            resultDisplay.textContent = `Ви не вгадали! Ставка програна: ${betAmount} грн.`;
        } else {
            // Якщо випадкове число позитивне, користувач виграв
            const winnings = betAmount * randomNum;
            resultDisplay.textContent = `Вітаємо! Ви виграли: ${winnings} грн.`;
        }
    }, 1000);  // Затримка у 1 секунду
});
