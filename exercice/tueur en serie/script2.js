// j ai un peu galerer pour le code donc des fois j initalise des variables qui ne servent pas le code mais qui sont utilisé c etait pour debuger et enlever les derniers bugs
mortDePersoDebug=[] // genre cette classe 

// a la base j'avais pas trop fais comme ça et on m'a dit de faire comme parce que comment je partais j'etais bloquer sur la fin,
// bref, on initalise ce qu'on a faire avec un construceur comme en python
class Survivants {// une fois pour les surviants
    constructor(nom, stats) {
        this.nom = nom;
        this.stats = stats;
        this.estMort = false;
    }
}

class Bio {// une fois pour leurs bios, leurs specificte 
    constructor(nom, attaque, mort, coupFinal) {
        this.nom = nom;
        this.attaque = attaque;
        this.mort = mort;
        this.coupFinal = coupFinal;
    }
}

class Tueur {// ensuite le tueur qui reste pareil mais qui sert aussi au combat
    constructor(nom, pv) {
        this.nom = nom; // "Jason"
        this.pv = pv;
    }

    attackSurvivor(personnage) {//systeme de combat
        let action = Math.random();
        if (action > personnage.stats.attaque) {
            this.pv = this.pv - 10;// j'ai pas fais -- parce que l'ipad bug quand je fais -- des fois 
            console.log(`${personnage.nom} esquive l'attaque et pare en infligent 10 points de dégâts à ${this.nom}`);
            console.log(`les hp de ${this.nom}, sont égal à ${this.pv} `);
        } else if (action < personnage.stats.coupFinal) {
            personnage.estMort = true;
            this.pv = this.pv - 15;
            console.log(`Lutte ultime, en mourrant ${personnage.nom} arrive à blesser de 15 pv : ${this.nom}`);
            console.log(`Attention ! ${this.nom}n'a plus que ${this.pv} points de vie. `);
        } else {
            personnage.estMort = true;
            console.log(` ${personnage.nom} s'est fait brutalement tuer par ${this.nom}.`);
        }
    }
}
let infoTueur = new Tueur("Jason", 100);//on initalise jason directement apres la classe tueur 
const prenom = ["Kader", "RV", "Gabriel", "Lucas", "Alexandre"]; // j'ai mis votre prenom + 10 points direct non ?
const statistiques = [  //on initalise les statisques directement dans un tableau
    new Bio("Grand", 0.2, 0.3, 0.5),// represente les stats du role Grand
    new Bio("Cool", 0.4, 0.1, 0.5),// represente les stats du role Cool
    new Bio("Egoiste", 0.1, 0.6, 0.3),// represente les stats du role Egoiste
    new Bio("intello", 0.3, 0.4, 0.3),// represente les stats du role Intello
    new Bio("Fayot", 0.6, 0.2, 0.2)// represente les stats du role Fayot
];
let groupe = [];//on initalise le groupe
let personneMorte = [];//On initalise la liste qui contiedra les personnes mortes (deja initialiser la haut par une autre variable mais je l'ai ajoutee apres on prends pas compte de la premiere)
//on attribut les differents roles aux differents survivants 
for (let i = 0; i < 5; i++) {  // pour une boucle de 5 comme les 5 personnes du groupe
    const affectationStats = Math.floor(Math.random() * statistiques.length); 
    const affectationSurvivant = Math.floor(Math.random() * prenom.length);
    const Surviv = new Survivants(prenom[affectationSurvivant], statistiques[affectationStats]);
    groupe.push(Surviv);
}
//condictions de victoire jason
while (infoTueur.pv > 0) {// maintenir une boucle tant que jason peut se battre entre autre
    let victoireJason = true;// verifier qu'il nai pas gag,er
    for (let personnage of groupe) {//parcourir le tableau
        if (!personnage.estMort) {// test de mort, la personne est elle morte grace au .estMort
            victoireJason = false; // Au moins un survivant est en vie
            // cette brique de code force jason a attaquer uniquement les survivants vivants
            infoTueur.attackSurvivor(personnage);
            
            if (infoTueur.pv <= 0) {
                console.log(`Les survivants triomphent ! Jason rend l"âme`);// message de victoire coté survivant
                break;
            }
        }
    }
    /**
     * au debut je voulais faire comme ça mais j ai pas reussi jai du demander un peu d aide a internet 
     * pour comprendre pourquoi ça ne fonctionait pas
      if (victoireJason) {// si le tueur gagne 
        console.log("Jason lemporte avec un nombre d hp égal à : ")
        console.log ("${infoTueur.pv}")//simple annonce
        //permet d"afficher les pv restant de jason
        break;//fais sortir de la victoire de jason
    } */
    if (victoireJason) {
        console.log(`le tueur en serie, Jason remporte avec ${infoTueur.pv} pv !`);
        break;
    }
    
}
// à partir d"ici on s"occupe de l"end game coté survivant :
for (let personnage of groupe) {// permet de parcourir les personnages du groupe
    mortDePersoDebug.push(personnage.nom);
    if (personnage.estMort === false) { // verification de mort 
        console.log(`${personnage.nom} est en vie`);// si negatif on retourne que la personne est en vie
    }
}
//test par element et personne parcourus avec le mortdepersodebug et le personne.mort
for (let personnage of groupe) { //permet de parcourir le personnage du groupe pour faire un test
    if (personnage.estMort === true) {// premier test de mort 
        for (i=0;i<mortDePersoDebug.length;i++){ // pour tester chaque personne morte au tableau crée et : (commentaire suivant)
            if (personnage.estMort == mortDePersoDebug[i] )// eviter la situation ou un personnage se retrouve en vie et mort a la fois mais apparement java script le prends pas en compte j"ai testé sur pthon et sa marche, peut etre une erreur de syntax ?
                break;}//fais sortir de la boucle si une personne est morte et vivante c"est la mauvaise méthode de 1 cest pas tres propre de deux ça ne fonctionne pas de 3 j"ai conscience que c"est stupide car si j"arrzete la boucle on test pas les autres personnes du groupes mais apparment ça ne fonctionne pas 
        personneMorte.push(personnage.nom);
    }
}
console.log("Les personnes mortes : " + personneMorte);// nous fais la listes des personnes mortes