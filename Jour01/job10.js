const url = require('url');

// URL initiale
const initialUrl = "https://www.google.com/search=nodejs";

// Analyser l'URL
const parsedUrl = url.parse(initialUrl, true);

// Récupérer le protocole utilisé
console.log("Protocole utilisé : " + parsedUrl.protocol);

// Récupérer le nom d'hôte
console.log("Nom d'hôte : " + parsedUrl.hostname);

// Reformater l'URL en une nouvelle URL valide en modifiant le nom d'hôte
parsedUrl.hostname = "www.laplateforme.io";

// Supprimer les paramètres existants pour éviter de les dupliquer
delete parsedUrl.query;

// Ajouter à cette nouvelle URL un paramètre
parsedUrl.search = "?lang=fr"; // Nous ajoutons directement le paramètre à la chaîne de requête

// Construire la nouvelle URL
const newUrl = url.format(parsedUrl);

// Afficher dans le terminal la nouvelle URL
console.log("Nouvelle URL : " + newUrl);