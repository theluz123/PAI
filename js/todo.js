
    window.onload = function () {
        loadTasksFromCookies();
    };

    function addTask() {
        var taskInput = document.getElementById('taskInput');
        var taskText = taskInput.value.trim();

        if (taskText !== '') {
            var tasksContainer = document.getElementById('tasks');
            var newTask = document.createElement('li');
            newTask.innerHTML = `
                <span>${taskText}</span>
                <button class="deleteTaskBtn" onclick="deleteTask(this)">Delete</button>
            `;
            tasksContainer.appendChild(newTask);
            taskInput.value = '';

            saveTasksToCookies();
        }
    }

    function deleteTask(deleteBtn) {
        var taskItem = deleteBtn.parentNode;
        taskItem.parentNode.removeChild(taskItem);

        saveTasksToCookies();
    }

    function saveTasksToCookies() {
        var tasks = [];
        var taskElements = document.querySelectorAll('#tasks li span');

        taskElements.forEach(function (taskElement) {
            tasks.push(taskElement.textContent);
        });

        // Save tasks array to cookies
        document.cookie = `tasks=${JSON.stringify(tasks)}`;
    }

    function loadTasksFromCookies() {
        var cookies = document.cookie.split(';');
        var tasksCookie = cookies.find(cookie => cookie.trim().startsWith('tasks='));

        if (tasksCookie) {
            var tasks = JSON.parse(tasksCookie.split('=')[1]);

            var tasksContainer = document.getElementById('tasks');
            tasks.forEach(function (taskText) {
                var newTask = document.createElement('li');
                newTask.innerHTML = `
                    <span>${taskText}</span>
                    <button class="deleteTaskBtn" onclick="deleteTask(this)">Delete</button>
                `;
                tasksContainer.appendChild(newTask);
            });
        }
    }
