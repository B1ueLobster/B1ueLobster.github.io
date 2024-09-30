// Масив товарів
const products = [
    { productId: 1, name: "Laptop", price: 1000 },
    { productId: 2, name: "Phone", price: 500 },
    { productId: 3, name: "Tablet", price: 300 }
];

// Масив покупок
const purchases = [
    { purchaseId: 1, productId: 1, quantity: 3 },
    { purchaseId: 2, productId: 2, quantity: 5 },
    { purchaseId: 3, productId: 1, quantity: 1 },
    { purchaseId: 4, productId: 3, quantity: 2 },
    { purchaseId: 5, productId: 2, quantity: 1 }
];

// Функція для об'єднання даних та обчислення загальної суми продажів для кожного товару
function getTotalSales(products, purchases) {
    return purchases.reduce((sales, purchase) => {
        // Знаходимо товар за його productId
        const product = products.find(product => product.productId === purchase.productId);
        if (product) {
            // Якщо товар знайдено, додаємо його загальний дохід до об'єкту sales
            const totalIncome = product.price * purchase.quantity;
            sales[product.name] = (sales[product.name] || 0) + totalIncome;
        }
        return sales;
    }, {});
}

// Функція для відображення результату
function displayResult(sales) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Очищаємо попередні результати

    if (Object.keys(sales).length > 0) {
        for (const [product, total] of Object.entries(sales)) {
            resultDiv.innerHTML += `<p>${product}: $${total}</p>`;
        }
    } else {
        resultDiv.innerHTML = `<p>Немає даних про продажі.</p>`;
    }
}

// Додаємо подію до кнопки
document.getElementById('getTotalSalesButton').addEventListener('click', () => {
    const totalSales = getTotalSales(products, purchases);
    displayResult(totalSales);
});
