// Масив студентів
const students = [
    { name: "John", age: 20, grade: 85, group: "A" },
    { name: "Jane", age: 22, grade: 92, group: "B" },
    { name: "Tom", age: 21, grade: 78, group: "A" },
    { name: "Alice", age: 23, grade: 89, group: "B" },
    { name: "Bob", age: 20, grade: 95, group: "C" }
];

// Функція для групування студентів за групами
function groupBy(arr) {
    return arr.reduce((acc, student) => {
        acc[student.group] = acc[student.group] || [];
        acc[student.group].push(student);
        return acc;
    }, {});
}

// Функція для сортування студентів за оцінками (спадання)
function sortStudentsByGrade(arr) {
    return [...arr].sort((a, b) => b.grade - a.grade);
}

// Функція для відображення результатів
function displayResults(results) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Очищаємо попередні результати

    if (typeof results === 'object' && !Array.isArray(results)) {
        // Відображення групованих студентів
        for (let group in results) {
            resultDiv.innerHTML += `<h3>Група: ${group}</h3>`;
            results[group].forEach(student => {
                resultDiv.innerHTML += `<p>Ім'я: ${student.name}, Вік: ${student.age}, Оцінка: ${student.grade}</p>`;
            });
        }
    } else {
        // Відображення відсортованих студентів
        results.forEach(student => {
            resultDiv.innerHTML += `<p>Ім'я: ${student.name}, Вік: ${student.age}, Оцінка: ${student.grade}, Група: ${student.group}</p>`;
        });
    }
}

// Додаємо події до кнопок
document.getElementById('groupByButton').addEventListener('click', () => {
    const groupedStudents = groupBy(students);
    displayResults(groupedStudents);
});

document.getElementById('sortByGradeButton').addEventListener('click', () => {
    const sortedStudents = sortStudentsByGrade(students);
    displayResults(sortedStudents);
});
