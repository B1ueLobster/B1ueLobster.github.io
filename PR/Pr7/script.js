const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const sortButton = document.getElementById('sortButton');

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && taskInput.value) {
    addTask(taskInput.value);
    taskInput.value = '';
  }
});

function addTask(text) {
  const li = document.createElement('li');
  const date = new Date();
  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  
  li.innerHTML = `
    <input type="checkbox" class="checkbox">
    <span>${text} <small>${formattedDate}</small></span>
    <button class="delete">×</button>
  `;
  taskList.appendChild(li);
  saveTasks();
}

document.addEventListener('change', function (e) {
  if (e.target.classList.contains('checkbox')) {
    const task = e.target.closest('li');
    if (e.target.checked) {
      task.querySelector('span').style.textDecoration = 'line-through';
      task.querySelector('span').style.color = 'gray';
      e.target.style.display = 'none';
    }
  }
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.closest('li').remove();
    saveTasks();
  }
});

document.addEventListener('dblclick', function (e) {
  if (e.target.tagName === 'SPAN') {
    const taskText = e.target.textContent.trim();
    const input = document.createElement('input');
    input.type = 'text';
    input.value = taskText;
    e.target.replaceWith(input);

    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter' && input.value) {
        e.target.replaceWith(input.value);
        saveTasks();
      }
    });
  }
});

sortButton.addEventListener('click', function () {
  const tasks = Array.from(taskList.querySelectorAll('li'));
  tasks.sort(function (a, b) {
    const aCompleted = a.querySelector('.checkbox').checked;
    const bCompleted = b.querySelector('.checkbox').checked;
    return aCompleted - bCompleted;
  });
  
  tasks.forEach(task => taskList.appendChild(task));
  saveTasks();
});

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('li').forEach(function (task) {
    tasks.push({
      text: task.querySelector('span').textContent.trim(),
      completed: task.querySelector('.checkbox').checked
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    tasks.forEach(task => {
      addTask(task.text);
      if (task.completed) {
        const taskElement = taskList.querySelector('li:last-child');
        taskElement.querySelector('.checkbox').checked = true;
        taskElement.querySelector('span').style.textDecoration = 'line-through';
        taskElement.querySelector('span').style.color = 'gray';
        taskElement.querySelector('.checkbox').style.display = 'none';
      }
    });
  }
}

window.addEventListener('beforeunload', saveTasks);
window.addEventListener('load', loadTasks);
