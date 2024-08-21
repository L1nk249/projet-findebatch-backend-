const http = require('http');
const httpServer = http.createServer();

// Liste des origines acceptées
const allowOrigins = [
  'https://projet-fin-b-atch-front.vercel.app', // URL du frontend
  'https://projet-f-inde-b-ashbackend.vercel.app' // URL du backend pour des tests croisés
];

httpServer.on('request', (request, response) => {

    // Gestion des en-têtes CORS
    if (request.headers['origin'] && allowOrigins.includes(request.headers['origin'])) {
        response.setHeader('Access-Control-Allow-Origin', request.headers['origin']);
    } else {
        response.setHeader('Access-Control-Allow-Origin', 'null');
    }

    if (request.method === 'OPTIONS') {
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Authorization');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        response.writeHead(204); // Réponse 204 No Content pour les requêtes OPTIONS
        return response.end();
    }

    // Gestion des autres requêtes
    response.setHeader('Content-Type', 'application/json');

    // Exemples de réponse pour démonstration
    if (request.method === 'GET' && request.url === '/data') {
        response.writeHead(200);
        response.end(JSON.stringify({ message: 'Hello World' }));
    } else {
        response.writeHead(404);
        response.end(JSON.stringify({ error: 'Not Found' }));
    }
});

httpServer.listen(8080, () => {
    console.log('Server listening on port 8080');
});