function formatDate(date) {
    const now = new Date();
    const diff = now - date; // Різниця між поточним часом і заданою датою

    if (diff < 1000) {
        return "прямо зараз"; // Якщо пройшло менше 1 секунди
    }

    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) {
        return `${seconds} сек. назад`; // Якщо пройшло менше 1 хвилини
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} хв. назад`; // Якщо пройшло менше 1 години
    }

    // Форматування дати у формат "DD.MM.YY HH:mm"
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2); // Останні 2 цифри року
    const hours = String(date.getHours()).padStart(2, '0');
    const minutesFormatted = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutesFormatted}`; // Повна дата
}

function showFormattedDate() {
    const inputDate = document.getElementById('date-input').value;
    const date = new Date(inputDate);
    const formattedDate = formatDate(date);
    document.getElementById('result').textContent = `Форматована дата: ${formattedDate}`;
}
