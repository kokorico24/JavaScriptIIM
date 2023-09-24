/* Cet exercie est l'ecercie du taxi
Exo 1: Le taxi

John essaie de rentrer chez lui en taxi.

Problème : Il a horreur d'écouter Anissa de Wejdene qui passe tout le temps à la radio.

Des qu'il entend cette musique, il perd 1 de sante mentale et change de taxi.

Partons du principe qu'une musique se change à chaque feu rouge qu'il rencontre et qu'il est à 30 feux rouges de chez lui.

À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.

Deux possibilités de fin :

﻿﻿Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu'il est bien arrivé et qu'il lui a fallu x changements de taxi pour y arriver
﻿﻿Sa santé mentale tombe à 0, il explose et donc affiche « explosion »
Nous avons besoin d'un Personnage avec un prénom et une santé mentale à 10.

Nous avons besoin d'une liste de 5 musiques dont Anissa - Wejdene

Nous avons besoin d'un Trajet avec une radio, 30 feux rouges et un nombre de changement
*/
/* 
Brainstorming
je vais commencer par au brouillon traduir et convertir un maximum de choses en code :

en premier je vais cree une variable santeMentale et l'initialiser a 10
ensuite je vais crée la condition de reussite du chemin ou non grace a une boucle while, tant que santeMentale > 0 
je vais aussi faire les consequence lie a la condition 
je vais cree une variable feuCompteur = a 30 qui diminue de 1 a chaque fois que l'on reste dans la boucle while, et afficher une phrase 
je vais cree un tableau avec 5 element dont anissa wejdene 
je vais ensuite a chaque feu sortir un nombre aleatoire pour faire la radio en mode en aleatoire 
verifier que musique != wejdene si = santé --




while (santeMentale > 0){ 
    console.log("santé mentale " ,santeMentale)
    while (feuCompteur > 0){ 
        feuCompteur--;
        let numMusique = Math.floor(Math.random() * 5);
        if (numMusique==sonradio[4]){
            santeMentale--
        };
        console.log("musique jouée : ", sonradio[numMusique], " il reste :",feuCompteur, " feu rouge");
        };
        console.log("vous êtes arrivé !");
    };
    if (santeMentale < 0) {
        console.log("explosion !");
    };

    ça fait que boucler du coup je vais changer de methode
*/
// j'arrive pas avec une boucle while du coup je vais le faire avec une boucle for


let santeMentale = 10;
let feuCompteur = 30;
let sonRadio = ["PNL - Au DD", "Jul - Tchikita", "Legends Never Die - Against The Current", "T.CHIALER - Damso", "Anissa - Wejdene"];
let changementDeTaxis = 0;

for(let i=0; i<30;i++){ //boucle en 30 pour simuler les feux
    let passeRadio = sonRadio[Math.floor(Math.random()*sonRadio.length)]; // de base je voulais que l'index final ne change jamais mais comme j'ai recommencé mon programme j'en profite pour rétablir tout
    if (passeRadio == "Anissa - Wejdene"){  //si c'est anissa alors :
        santeMentale--; // perte de un point de santé mentale
        changementDeTaxis++; // et changement de taxis
        if (santeMentale<=0){ // on verifie que la santé n'ai pas atteint 0 
            console.log("explosion");//si c'est le cas on explose
            break;// et on met fin a la boucle 
        }
    }
    feuCompteur-- //sinon on diminue le compteur
    if (feuCompteur !=0){// si le compteur n'est pas egal a 0 on boucle + info sinon  ligne 78
        console.log("la radio joue : ", passeRadio ,". Pour arriver il reste : ", feuCompteur, " feux rouges." ) // on envoie les infos 
    }else{//sinon on est bien arrivé
        console.log("Vous êtes arrivé en : ", changementDeTaxis , " changements de taxis.")
    }
}

// ici je sais qu'il n'y a que 5 musique (dont wejdene a l'index 4) et que ce chiffre ne change pas pour un programme plus lourd (par exemple si des musique s'ajoutent au cours du programme)j'aurais testé si l'index du numero aleatoire est affecte a wejdene, mais ce n'est pas demandé donc je fais au plus simple