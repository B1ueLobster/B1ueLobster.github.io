// Створюємо масив об`єктів products
const products = [
    { name: "Laptop", category: "Electronics", price: 1200, inStock: 5 },
    { name: "Phone", category: "Electronics", price: 800, inStock: 0 },
    { name: "Headphones", category: "Accessories", price: 150, inStock: 15 },
    { name: "Keyboard", category: "Accessories", price: 100, inStock: 8 },
    { name: "Monitor", category: "Electronics", price: 300, inStock: 2 }
];

// Функція для фільтрації товарів, у яких inStock більше 0
function getAvailableProducts() {
    return products.filter(product => product.inStock > 0);
}

// Функція для пошуку товару за назвою
function findProductByName(productName) {
    const product = products.find(product => product.name.toLowerCase() === productName.toLowerCase());
    return product ? product : "Товар не знайдено";
}

// Функція для відображення результатів
function displayProducts(productsArray) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Очищаємо попередні результати
    if (productsArray.length === 0) {
        resultDiv.innerHTML = '<p>Немає доступних товарів</p>';
    } else if (typeof productsArray === 'string') {
        resultDiv.innerHTML = `<p>${productsArray}</p>`;
    } else {
        productsArray.forEach(product => {
            resultDiv.innerHTML += `<p>Назва: ${product.name}, Категорія: ${product.category}, Ціна: ${product.price}$, В наявності: ${product.inStock}</p>`;
        });
    }
}

// Додаємо події до кнопок
document.getElementById('showAvailableProducts').addEventListener('click', () => {
    const availableProducts = getAvailableProducts();
    displayProducts(availableProducts);
});

document.getElementById('findProductByName').addEventListener('click', () => {
    const productName = document.getElementById('productNameInput').value;
    const foundProduct = findProductByName(productName);
    displayProducts(foundProduct ? [foundProduct] : "Товар не знайдено");
});
