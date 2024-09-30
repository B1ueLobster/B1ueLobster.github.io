// Масив замовлень
const orders = [
    {
        orderId: 1,
        customer: { name: "John Doe", email: "john@example.com" },
        items: ["Item 1", "Item 2"],
        total: 150
    },
    {
        orderId: 2,
        customer: { name: "Jane Smith", email: "jane@example.com" },
        items: ["Item 3"],
        total: 75
    },
    {
        orderId: 3,
        customer: { name: "John Doe", email: "john@example.com" },
        items: ["Item 4", "Item 5", "Item 6"],
        total: 300
    },
    {
        orderId: 4,
        customer: { name: "Alice Johnson", email: "alice@example.com" },
        items: ["Item 7"],
        total: 100
    }
];

// Функція для підрахунку загальної суми, витраченої клієнтом
function getTotalSpentByCustomer(arr, customerName) {
    return arr
        .filter(order => order.customer.name.toLowerCase() === customerName.toLowerCase())
        .reduce((total, order) => total + order.total, 0);
}

// Функція для відображення результату
function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Очищаємо попередні результати

    if (result > 0) {
        resultDiv.innerHTML = `<p>Загальна сума витрат клієнта: $${result}</p>`;
    } else {
        resultDiv.innerHTML = `<p>Клієнта не знайдено або він не зробив жодного замовлення.</p>`;
    }
}

// Додаємо подію до кнопки
document.getElementById('getTotalSpentButton').addEventListener('click', () => {
    const customerName = document.getElementById('customerNameInput').value;
    if (customerName) {
        const totalSpent = getTotalSpentByCustomer(orders, customerName);
        displayResult(totalSpent);
    } else {
        alert("Будь ласка, введіть ім'я клієнта.");
    }
});
