const http = require('http');

// Créer le serveur HTTP
const server = http.createServer((req, res) => {
    // Définir le statut de réponse et le type de contenu
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Envoyer la réponse
    res.end('Hello World!\n');
});

// Démarrer le serveur sur le port 8888
const port = 8888;
server.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}.`);
});
