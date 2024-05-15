const fs = require('fs');

// Chemin vers le fichier data.txt
const filePath = './data.txt';

try {
    // Lire le contenu du fichier de manière synchrone
    const data = fs.readFileSync(filePath, 'utf8');
    console.log("Contenu du fichier data.txt :");
    console.log(data);
} catch (err) {
    console.error("Erreur lors de la lecture du fichier : ", err);
}
