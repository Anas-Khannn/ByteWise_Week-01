document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('input-box');
    const inputButton = document.getElementById('input-button');
    const listContainer = document.getElementById('list-container');
    const completedCounter = document.getElementById('completed-counter');
    const uncompletedCounter = document.getElementById('uncompleted-counter');

    let completedCount = 0;
    let uncompletedCount = 0;

    // Add task function
    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-button');
        completeButton.onclick = function() {
            if (taskItem.classList.contains('completed')) {
                taskItem.classList.remove('completed');
                uncompletedCount++;
                completedCount--;
            } else {
                taskItem.classList.add('completed');
                uncompletedCount--;
                completedCount++;
            }
            updateCounters();
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = function() {
            listContainer.removeChild(taskItem);
            if (taskItem.classList.contains('completed')) {
                completedCount--;
            } else {
                uncompletedCount--;
            }
            updateCounters();
        };

        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
        listContainer.appendChild(taskItem);

        uncompletedCount++;
        updateCounters();
        inputBox.value = '';
    }

    // Update task counters
    function updateCounters() {
        completedCounter.textContent = completedCount;
        uncompletedCounter.textContent = uncompletedCount;
    }

    // Event listeners
    inputButton.addEventListener('click', addTask);
    inputBox.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
