### Pour bien commencer à travailler sur le projet
- Clôner le projet sur sa machine: `git clone https://github.com/Madylune/nekonect.git`
- Toujours travailler à partir de la branche dev `git fetch` puis `git checkout dev`
- Créer sa propre branche à partir de celle de dev `git checkout -b nom_de_la branche`
- Coder
- Une fois le travail terminé: `git add -A` puis `git commit -m "expliquez la tâche effectuée"`
- Pousser votre branche sur le repo distant: `git push origin/votre_branche`
- Aller sur le repo github et créer une pull request (PR) en appuyant sur le bouton `Compare & pull request`
- Attendre que le lead dev valide votre PR et la merge sur dev

### `npm start` : Lancer l'application pour le développement

Lancer la commande `npm start`<br>
Ouvrir [http://localhost:3000](http://localhost:3000) dans un navigateur.

La page sera rechargée après chaque sauvegarde suite à une modification.
(En cas d'erreur de dépendances introuvables, interrompre la compilation `ctrl + C` et lancer `npm install`)

### `npm install` + nom du package : Installer une dépendance

Lancer la commande `npm install + npm du package` ou `npm i + nom du package`<br>

### Commandes GIT importantes
- `git checkout -b` : Créer une branche + aller sur cette branche directement
- `git pull origin + nom de la branche` : Récupérer les dernières modifications effectuées sur la branche distante
- `git add -A` : Ajouter tous les fichiers contenants nos modifications
- `git commit -m + "commentaire"` : Ajouter un commit
- `git push origin + nom de la branche` : Pousser notre travail sur une branche distante
- `git rebase + nom de la branche` : Mettre notre branche au niveau d'une autre branche
