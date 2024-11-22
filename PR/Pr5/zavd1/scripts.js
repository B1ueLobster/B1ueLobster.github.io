        // Створюємо об'єкт Date для 20 лютого 2021, 3:12 ранку
        const date = new Date(2021, 1, 20, 3, 12); // Місяці рахуються з 0

        // Виводимо дату у форматі локального часу
        document.getElementById('date-output').textContent = date.toLocaleString();