const http = require('http');

function handleRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}

const server = http.createServer(handleRequest);
module.exports = server; // Assurez-vous que le serveur est exporté