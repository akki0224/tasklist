document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${taskText}</span>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
        }
    });

    
document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${taskText}</span>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';

        // Save tasks to local storage
        saveTasks();
    }

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
        }
    });

    // Event delegation for handling edit and delete buttons
    taskList.addEventListener('click', function (e) {
        const target = e.target;
        if (target.classList.contains('edit-button')) {
            const taskText = target.parentElement.querySelector('.task-text').textContent;
            const newText = prompt('Edit task:', taskText);
            if (newText !== null) {
                target.parentElement.querySelector('.task-text').textContent = newText;
                saveTasks();
            }
        } else if (target.classList.contains('delete-button')) {
            const confirmation = confirm('Are you sure you want to delete this task?');
            if (confirmation) {
                target.parentElement.remove();
                saveTasks();
            }
        }
    });
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.textContent = taskText;
            const editButton = document.createElement("button");
            const deleteButton = document.createElement("button");

            editButton.textContent = "Edit";
            editButton.addEventListener("click", function () {
                editTask(li, span);
            });

            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });

            li.appendChild(span);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    function editTask(li, span) {
        const newText = prompt("Edit task:", span.textContent);
        if (newText !== null) {
            span.textContent = newText;
        }
    }
});

    // Event delegation for handling checkbox clicks
    taskList.addEventListener('change', function (e) {
        const target = e.target;
        if (target.classList.contains('task-checkbox')) {
            const taskTextElement = target.nextElementSibling; // Get the associated task text element
            if (target.checked) {
                taskTextElement.style.textDecoration = 'line-through';
                taskTextElement.style.color = '#888';
            } else {
                taskTextElement.style.textDecoration = 'none';
                taskTextElement.style.color = 'initial';
            }
            saveTasks();
        }
    });

    // Load tasks from local storage
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            tasks.forEach(taskText => {
                addTask(taskText);
            });
        }
    }

    // Save tasks to local storage
    function saveTasks() {
        const tasks = Array.from(document.querySelectorAll('.task-text')).map(taskTextElement => taskTextElement.textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks when the page loads
    loadTasks();
});
