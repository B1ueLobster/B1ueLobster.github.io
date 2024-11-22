function getLastDayOfMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}

function showLastDay() {
    // Отримуємо значення з полів вводу
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);

    // Обчислюємо останній день місяця
    const lastDay = getLastDayOfMonth(year, month);

    // Виводимо результат
    document.getElementById('result').textContent = 
        `Останній день місяця: ${lastDay}`;
}
