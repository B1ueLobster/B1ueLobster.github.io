document.getElementById("input").addEventListener("blur", function () {
    const fullName = this.value.trim(); // Отримуємо текст з поля
    const parts = fullName.split(" "); // Розділяємо текст на частини

    const resultTable = document.getElementById("result");
    resultTable.innerHTML = ""; // Очищуємо таблицю перед додаванням нових даних

    // Перевіряємо кількість частин ПІБ
    if (parts.length === 3) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${parts[0]}</td>
            <td>${parts[1]}</td>
            <td>${parts[2]}</td>
        `;
        resultTable.appendChild(row);
    } else {
        // Якщо дані некоректні, виводимо повідомлення
        const errorRow = document.createElement("tr");
        errorRow.innerHTML = `<td colspan="3" style="color: red;">Некоректний формат ПІБ. Будь ласка, введіть у форматі "Прізвище Ім'я По батькові".</td>`;
        resultTable.appendChild(errorRow);
    }
});