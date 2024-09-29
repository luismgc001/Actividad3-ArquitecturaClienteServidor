document.getElementById('taskForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const task = document.getElementById('task').value;

    // Agregar nueva tarea al servidor
    await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task })
    });

    loadTasks();
    document.getElementById('task').value = ''; // Limpiar el input
});

async function loadTasks() {
    // Obtener todas las tareas del servidor
    const response = await fetch('http://localhost:3000/tasks');
    const tasks = await response.json();

    const list = document.getElementById('tasksList');
    list.innerHTML = '';
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.task;
        
        // Botón para marcar la tarea como completada
        const completeBtn = document.createElement('button');
        completeBtn.textContent = task.completed ? 'Reabrir' : 'Completar';
        completeBtn.addEventListener('click', () => toggleTask(task.id));

        // Botón para eliminar la tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        listItem.appendChild(completeBtn);
        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);
    });
}

async function toggleTask(taskId) {
    // Marcar o desmarcar una tarea como completada
    await fetch(`http://localhost:3000/tasks/${taskId}/toggle`, {
        method: 'PUT'
    });
    loadTasks();
}

async function deleteTask(taskId) {
    // Eliminar una tarea
    await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'DELETE'
    });
    loadTasks();
}

loadTasks(); // Cargar las tareas al cargar la página
