// Task 1: User Information Form

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values using variables
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;

    // Store data in an object
    const user = {
        fullName: fullName,
        email: email,
        age: age,
        city: city
    };

    // Show confirmation dialog
    const isConfirmed = confirm("Are you sure you want to submit?");

    const messageElement = document.getElementById('userFormMessage');
    const resultElement = document.getElementById('userFormResult');

    if (isConfirmed) {
        // Success: show message and display user info using template literals
        messageElement.innerHTML = '<div class="message success">Form submitted successfully!</div>';
        resultElement.style.display = 'block';
        resultElement.innerHTML = `
            <h3>User Information:</h3>
            <p><strong>Full Name:</strong> ${user.fullName}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>City:</strong> ${user.city}</p>
        `;
    } else {
        // Cancelled: show cancellation message and hide result
        messageElement.innerHTML = '<div class="message error">Form submission cancelled.</div>';
        resultElement.style.display = 'none';
    }
});


// Task 2: Student Marks Checker

document.getElementById('checkResult').addEventListener('click', function() {
    const studentName = document.getElementById('studentName').value.trim();
    const marks = Number(document.getElementById('marks').value);
    const resultElement = document.getElementById('studentResult');

    // Basic validation
    if (studentName === '' || document.getElementById('marks').value === '') {
        resultElement.style.display = 'block';
        resultElement.innerHTML = '<div class="message error">Please enter both name and marks.</div>';
        return;
    }

    // Condition: Pass if marks >= 40, else Fail
    let status;
    let cssClass;

    if (marks >= 40) {
        status = 'Pass';
        cssClass = 'success';
    } else {
        status = 'Fail';
        cssClass = 'error';
    }

    resultElement.style.display = 'block';
    resultElement.innerHTML = `
        <div class="message ${cssClass}">
            <p><strong>Student Name:</strong> ${studentName}</p>
            <p><strong>Marks:</strong> ${marks}</p>
            <p><strong>Result:</strong> ${status}</p>
        </div>
    `;
});


// Task 3: Simple To-Do List

// Array to store tasks as objects
const tasks = [];

// Function to update the stats display (total, completed, pending)
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    document.getElementById('totalTasks').textContent = total;
    document.getElementById('completedTasks').textContent = completed;
    document.getElementById('pendingTasks').textContent = pending;
}

// Function to render the task list from the tasks array (DOM manipulation)
function renderTasks() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; // Clear current list

    // Loop through tasks array and build list items
    tasks.forEach(function(task, index) {
        const li = document.createElement('li');
        li.className = 'todo-item' + (task.completed ? ' completed' : '');

        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button class="btn-complete" onclick="toggleComplete(${index})">
                    ${task.completed ? 'Undo' : 'Done'}
                </button>
                <button class="btn-delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        todoList.appendChild(li);
    });

    updateStats();
}

// Function to add a new task
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') return; // Do nothing if input is empty

    // Push a new task object into the array
    tasks.push({
        text: taskText,
        completed: false
    });

    input.value = ''; // Clear the input field
    renderTasks();
}

// Function to toggle a task's completed status
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to delete a task from the array using splice
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Event listener for Add Task button
document.getElementById('addTask').addEventListener('click', addTask);

// Allow pressing Enter to add a task
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});