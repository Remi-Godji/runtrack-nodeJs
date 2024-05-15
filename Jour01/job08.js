const fs = require('fs');

// Chemin vers le fichier data.txt
const filePath = './data.txt';

// Lire le contenu du fichier de manière asynchrone
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du fichier : ", err);
        return;
    }
    console.log("Affichage d'une lettre sur deux du fichier data.txt :");

    // Traiter le contenu pour afficher une lettre sur deux
    let result = '';
    for (let i = 0; i < data.length; i += 2) {
        result += data[i];
    }
    console.log(result);
});
