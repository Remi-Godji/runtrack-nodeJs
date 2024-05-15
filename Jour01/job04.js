const fs = require('fs');
const path = require('path');

console.log("Début de l'exécution du script...");

fs.readdir('.', (err, files) => {
    if (err) {
        console.error("Erreur lors de la lecture du répertoire : ", err);
        return;
    }

    // Filtrer uniquement les dossiers
    const directories = files.filter(file => {
        return fs.statSync(path.join('.', file)).isDirectory();
    });

    // Afficher les dossiers
    if (directories.length > 0) {
        console.log("Dossiers dans le répertoire courant :");
        directories.forEach(dir => {
            console.log(dir);
        });
    } else {
        console.log("Aucun dossier trouvé dans le répertoire courant.");
    }
});
