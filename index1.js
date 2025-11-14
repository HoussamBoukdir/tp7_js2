let personne={
    nom:"ALAOUI",
    prenom:"Ahmed"
};

let {nom,prenom}=personne;
console.log(`nom=${nom} prenom=${prenom}`);

//les variables ont des noms différents des noms des propriétés
//nom1 au lieu de nom
//prenom1 au lieu de prenom
let {nom:nom1, prenom:prenom1}=personne;
console.log(`nom=${nom1} prenom=${prenom1}`);

//la commande pour executer le code
//node index1.js