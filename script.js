document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        // Create a new task item
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        // Create the checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleComplete);

        // Create the label
        const label = document.createElement('label');
        label.textContent = taskText;

        // Create edit and delete buttons
        const editBtn = document.createElement('button');
        editBtn.className = 'edit';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editTask(label));

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(listItem));

        // Append all elements to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

function toggleComplete(event) {
    const listItem = event.target.parentElement;
    const label = listItem.querySelector('label');
    if (event.target.checked) {
        label.classList.add('completed');
    } else {
        label.classList.remove('completed');
    }
}

function editTask(label) {
    const newTaskText = prompt('Edit your task:', label.textContent);
    if (newTaskText !== null) {
        label.textContent = newTaskText;
    }
}

function deleteTask(listItem) {
    listItem.remove();
}
