// Масив працівників
const employees = [
    { name: "John", position: "Manager", salary: 5000, years: 10 },
    { name: "Jane", position: "Developer", salary: 4500, years: 8 },
    { name: "Tom", position: "Designer", salary: 3500, years: 6 },
    { name: "Alice", position: "QA Engineer", salary: 4000, years: 7 },
    { name: "Bob", position: "Developer", salary: 4800, years: 12 }
];

// Функція для обчислення середньої зарплати
function getAverageSalary(arr) {
    const totalSalary = arr.reduce((acc, employee) => acc + employee.salary, 0);
    return (totalSalary / arr.length).toFixed(2);
}

// Функція для пошуку працівника з найбільшим досвідом роботи
function findMostExperiencedEmployee(arr) {
    return arr.reduce((mostExperienced, employee) => {
        return (employee.years > mostExperienced.years) ? employee : mostExperienced;
    });
}

// Функція для відображення результатів
function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Очищаємо попередні результати

    if (typeof result === 'string') {
        resultDiv.innerHTML = `<p>${result}</p>`;
    } else if (typeof result === 'object') {
        resultDiv.innerHTML = `<p>Ім'я: ${result.name}, Посада: ${result.position}, Зарплата: ${result.salary}, Роки на посаді: ${result.years}</p>`;
    }
}

// Додаємо події до кнопок
document.getElementById('averageSalaryButton').addEventListener('click', () => {
    const averageSalary = getAverageSalary(employees);
    displayResult(`Середня зарплата: ${averageSalary}$`);
});

document.getElementById('mostExperiencedEmployeeButton').addEventListener('click', () => {
    const mostExperiencedEmployee = findMostExperiencedEmployee(employees);
    displayResult(mostExperiencedEmployee);
});
