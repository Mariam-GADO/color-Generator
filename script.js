const couleurCode = document.getElementById('couleur-code');

function genererCouleurAleatoire() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16); // Génère une couleur hexadécimale aléatoire
}

function changerCouleur() {
    const couleur = genererCouleurAleatoire();
    document.body.style.backgroundColor = couleur;
    couleurCode.textContent = couleur;
}

setInterval(changerCouleur, 1000); // Change la couleur toutes les secondesSS