// Функція для додавання нуля, якщо число менше 10
function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

// Функція для оновлення часу на екрані
function updateClock() {
    const now = new Date();
    
    // Отримуємо години, хвилини і секунди
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Додаємо нулі перед годинами, хвилинами і секундами, якщо це необхідно
    hours = addLeadingZero(hours);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);
    
    // Відображаємо час
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Оновлюємо кожну секунду
    setTimeout(updateClock, 1000);
}

// Запуск годинника при завантаженні сторінки
updateClock();
