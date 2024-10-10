// Масив книг
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, rating: 4.8, isRead: true },
    { title: "1984", author: "George Orwell", year: 1949, rating: 4.7, isRead: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, rating: 4.2, isRead: false },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, rating: 4.0, isRead: false },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, rating: 4.9, isRead: true },
    { title: "My Fight", author: "Adam Hill", year: 1869, rating: 4.1, isRead: false },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, rating: 4.5, isRead: true }
];

// Функція для отримання непрочитаних книг
function getUnreadBooks(arr) {
    return arr.reduce((unreadBooks, book) => {
        if (!book.isRead) {
            unreadBooks.push(book.title);
        }
        return unreadBooks;
    }, []);
}

// Функція для отримання книг за автором та сортування за роком видання
function getBooksByAuthor(arr, authorName) {
    return arr
        .filter(book => book.author.toLowerCase() === authorName.toLowerCase())
        .sort((a, b) => a.year - b.year);
}

// Функція для отримання топ-рейтинг книг (рейтинг вище 4), сортування за рейтингом
function getTopRatedBooks(arr) {
    return arr
        .filter(book => book.rating > 4)
        .sort((a, b) => b.rating - a.rating);
}

// Функція для відображення результатів
function displayResults(results) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Очищаємо попередні результати

    if (Array.isArray(results) && typeof results[0] === 'string') {
        // Відображення списку непрочитаних книг
        results.forEach(title => {
            resultDiv.innerHTML += `<p>${title}</p>`;
        });
    } else if (Array.isArray(results)) {
        // Відображення списку книг
        results.forEach(book => {
            resultDiv.innerHTML += `<p>Назва: ${book.title}, Автор: ${book.author}, Рік: ${book.year}, Рейтинг: ${book.rating}</p>`;
        });
    } else {
        resultDiv.innerHTML = `<p>Немає результатів</p>`;
    }
}

// Додаємо події до кнопок
document.getElementById('getUnreadBooksButton').addEventListener('click', () => {
    const unreadBooks = getUnreadBooks(books);
    displayResults(unreadBooks);
});

document.getElementById('getBooksByAuthorButton').addEventListener('click', () => {
    const authorName = document.getElementById('authorInput').value;
    if (authorName) {
        const booksByAuthor = getBooksByAuthor(books, authorName);
        displayResults(booksByAuthor);
    } else {
        alert("Будь ласка, введіть ім'я автора.");
    }
});

document.getElementById('getTopRatedBooksButton').addEventListener('click', () => {
    const topRatedBooks = getTopRatedBooks(books);
    displayResults(topRatedBooks);
});
