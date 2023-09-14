const addButton = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // Get the task text and remove leading/trailing spaces
    
    if (!taskText) {
        alert("Please insert a task to do");
        return;
    } else {
        const taskItem = document.createElement('li'); // Create a list item for the task
        const checkbox = document.createElement('input'); // Create a checkbox input
        checkbox.type = 'checkbox';
        const label = document.createElement('label'); // Create a label element

        // Set the label's text content to the task text
        label.textContent = taskText;

        // Append the checkbox and label to the task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }
});
