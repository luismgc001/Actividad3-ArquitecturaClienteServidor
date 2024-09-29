const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const tasksFilePath = path.join(__dirname, 'data', 'tasks.json');

// Obtener todas las tareas
app.get('/tasks', (req, res) => {
    fs.readFile(tasksFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error al leer las tareas' });
        }
        const tasks = JSON.parse(data);
        res.json(tasks);
    });
});

// Agregar una nueva tarea
app.post('/tasks', (req, res) => {
    const { task } = req.body;
    fs.readFile(tasksFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error al leer las tareas' });
        }
        const tasks = JSON.parse(data);
        const newTask = { id: Date.now(), task, completed: false };
        tasks.push(newTask);

        fs.writeFile(tasksFilePath, JSON.stringify(tasks), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error al guardar la tarea' });
            }
            res.status(201).json({ message: 'Tarea agregada' });
        });
    });
});

// Marcar/desmarcar una tarea como completada
app.put('/tasks/:id/toggle', (req, res) => {
    const taskId = parseInt(req.params.id);
    fs.readFile(tasksFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error al leer las tareas' });
        }
        const tasks = JSON.parse(data);
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            fs.writeFile(tasksFilePath, JSON.stringify(tasks), (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error al actualizar la tarea' });
                }
                res.json({ message: 'Tarea actualizada' });
            });
        } else {
            res.status(404).json({ message: 'Tarea no encontrada' });
        }
    });
});

// Eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    fs.readFile(tasksFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error al leer las tareas' });
        }
        let tasks = JSON.parse(data);
        tasks = tasks.filter(t => t.id !== taskId);

        fs.writeFile(tasksFilePath, JSON.stringify(tasks), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error al eliminar la tarea' });
            }
            res.json({ message: 'Tarea eliminada' });
        });
    });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
