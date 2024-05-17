const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const tasksPath = path.join(__dirname, 'data.json'); // Chemin vers votre fichier JSON

router.use(bodyParser.json());

// Route pour récupérer toutes les tâches
router.get('/tasks', (req, res) => {
    fs.readFile(tasksPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ error: 'Erreur lors de la lecture du fichier.' });
        }
        try {
            const tasks = JSON.parse(data);
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).send({ error: 'Erreur lors de l\'analyse des données.' });
        }
    });
});

// Route pour créer une nouvelle tâche
router.post('/tasks', (req, res) => {
    const newTask = req.body;

    fs.readFile(tasksPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ error: 'Erreur lors de la lecture du fichier.' });
        }
        let tasks;
        try {
            tasks = JSON.parse(data);
        } catch (error) {
            return res.status(500).send({ error: 'Erreur lors de l\'analyse des données.' });
        }

        tasks.push(newTask);

        fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).send({ error: 'Erreur lors de l\'écriture du fichier.' });
            }
            res.status(201).json(newTask);
        });
    });
});

// Route pour mettre à jour une tâche existante
router.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const updatedTask = req.body;

    fs.readFile(tasksPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ error: 'Erreur lors de la lecture du fichier.' });
        }
        let tasks;
        try {
            tasks = JSON.parse(data);
        } catch (error) {
            return res.status(500).send({ error: 'Erreur lors de l\'analyse des données.' });
        }

        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex === -1) {
            return res.status(404).send({ error: 'Tâche non trouvée.' });
        }

        tasks[taskIndex] = {...tasks[taskIndex],...updatedTask };

        fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).send({ error: 'Erreur lors de l\'écriture du fichier.' });
            }
            res.status(200).json(updatedTask);
        });
    });
});

// Route pour supprimer une tâche existante
router.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);

    fs.readFile(tasksPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ error: 'Erreur lors de la lecture du fichier.' });
        }
        let tasks;
        try {
            tasks = JSON.parse(data);
        } catch (error) {
            return res.status(500).send({ error: 'Erreur lors de l\'analyse des données.' });
        }

        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex === -1) {
            return res.status(404).send({ error: 'Tâche non trouvée.' });
        }

        tasks.splice(taskIndex, 1);

        fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).send({ error: 'Erreur lors de l\'écriture du fichier.' });
            }
            res.status(200).json({ message: 'Tâche supprimée avec succès.' });
        });
    });
});

module.exports = router;