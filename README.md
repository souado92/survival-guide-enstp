# Transport étudiant — Survival Guide ENSTP

Fichiers : `index.html` (interface), `data.js` (toutes les données), `README.md`.

## Tester en local
Double-cliquer sur `index.html` (aucun serveur, aucune clé API). Option : `python -m http.server 8000` puis http://localhost:8000.

## Mettre à jour les données
Modifier uniquement `data.js` : ajouter une ligne/un arrêt (`"Nom FR|Nom AR"`), renseigner `retour`, `meta.lastVerified` (ex. `"2026-11-05"`), retirer les mentions `check` une fois confirmées.

## Publier / intégrer
- Google Sites : héberger les 2 fichiers (GitHub Pages, Netlify Drop ou Cloudflare Pages, gratuits) puis Insérer > Intégrer > URL, ou mettre le lien/QR code dans le guide.
- Boutons Google Maps = recherche par nom (gratuit). Pour de vraies positions : ajouter des coordonnées vérifiées dans `data.js`.
