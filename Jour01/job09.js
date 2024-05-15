const fs = require('fs');

const filePath = './data.txt';
const newContent = "Je manipule les fichiers avec un module node";

try {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log("Le contenu du fichier data.txt a été mis à jour!");
} catch (err) {
    console.error("Erreur lors de l'écriture dans le fichier : ", err);
}


