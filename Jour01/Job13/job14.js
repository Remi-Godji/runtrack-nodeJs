const http = require('http');
const fs = require('fs');
const path = require('path');

// Créer le serveur HTTP
const server = http.createServer((req, res) => {
    let filePath = '.'; // Chemin de base pour les fichiers HTML

    // Gestion des erreurs pour les chemins non reconnus
    if (!req.url.startsWith('/')) {
        filePath = path.join(__dirname, 'error.html');
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(fs.readFileSync(filePath));
        return;
    }

    switch(req.url) {
        case '/':
            filePath += '/index.html';
            break;
        case '/about':
            filePath += '/about.html';
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("<h1>Page non trouvée</h1>");
            return;
    }

    // Construire le chemin complet du fichier
    filePath = path.join(__dirname, filePath);

    // Lire le fichier HTML
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end("<h1>Erreur interne du serveur</h1>");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

// Démarrer le serveur sur le port 8888
const port = 8888;
server.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}.`);
});
