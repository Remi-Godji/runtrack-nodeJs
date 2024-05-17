// index.js
const express = require('express');
const server = require('./server');
const tasksRoutes = require('./route'); // Importer les routes définies

const app = express();
app.use(express.json()); // Middleware pour analyser le corps des requêtes entrantes

// Associer les routes à l'application
app.use('/tasks', tasksRoutes);

// Démarrer le serveur
server.listen(3000, () => {
  console.log('Le serveur est en cours d\'exécution sur http://localhost:3000');
});


