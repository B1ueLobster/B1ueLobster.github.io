// Отримуємо елементи з HTML
const textInput = document.getElementById('textInput');
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');

let interval;  // Змінна для зберігання setInterval

// Функція для початку ефекту друку
function startTypingEffect(text) {
    let index = 0;  // Лічильник для кожної букви
    display.textContent = '';  // Очищення дисплея перед початком

    // Інтервал, який друкує по одній букві кожні 100 мс
    interval = setInterval(() => {
        if (index < text.length) {
            display.textContent += text[index];  // Додаємо одну букву за раз
            index++;  // Переходимо до наступної букви
        } else {
            clearInterval(interval);  // Зупиняємо інтервал, коли всі букви надруковані
        }
    }, 100);  // Інтервал друку 100 мілісекунд
}

// Обробник натискання на кнопку
startBtn.addEventListener('click', () => {
    const text = textInput.value.trim();  // Отримуємо текст з поля вводу
    if (text) {
        clearInterval(interval);  // Якщо ефект друку вже триває, зупиняємо його
        startTypingEffect(text);  // Запускаємо ефект друку з новим текстом
    }
});
