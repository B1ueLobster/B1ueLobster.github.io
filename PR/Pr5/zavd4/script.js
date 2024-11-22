function getSecondsToTomorrow() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setHours(24, 0, 0, 0);  // Встановлюємо 00:00 на наступний день
    return Math.floor((tomorrow - now) / 1000);  // Різниця в секундах
}

function showSecondsToTomorrow() {
    const seconds = getSecondsToTomorrow();
    document.getElementById('result').textContent = `Кількість секунд до завтра: ${seconds}`;
}
