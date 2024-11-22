function getWeekDay(date) {
    const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

// Приклад використання
const someDate = new Date(2024, 10, 21); // 21 листопада 2024 року
document.getElementById('week-day').textContent = getWeekDay(someDate); // Виведе "ЧТ"
