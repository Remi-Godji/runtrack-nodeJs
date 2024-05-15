const http = require('http');
const fs = require('fs');

// Créer le serveur HTTP
const server = http.createServer((req, res) => {
    // Lire le fichier index.html
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("Page non trouvée");
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
