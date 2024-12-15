//on créé les variables/constantes nécessaires
//Le jeu comporte 10 paires, nommé selon le format duo[1-10][ab].png. On va donc définir un Array possédant toutes les caractéristiques variables. 
const nomCartes = ["0a", "0b", "1a", "1b", "2a", "2b", "3a", "3b", "4a", "4b", "5a", "5b", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b"];

//mise à jour du alt des images
const desCartes =["Cryptologie étudiée", "Cryptologie non-malléable", "image Cynthia Dwork", "Cynthia Dwork", "Famille", "Bernard Dwork et Déborah Dwork", "Doctorat", "Université Corwell", "Thèse", "Limite des problèmes fondamentaux de l'informatique parrallèle et distribuée", "Qui a travaillé à ses côtés sur le développement de la cryptologie non-malléable", "Moni Naori et Danny Dolev", "Domaine de recherche", "Cryptographie","Proof of work","Sert à la proction contre les spams", "Déni de Service", "Empêcher l'utilisation du service", "Discussion avec Helen Nissenbaum","2000"];
const desnormaleCartes = "dos de carte du memory "
//Les cartes peuvent se retrouver dans trois états distincts : face caché, face visible ou invisible. On représente ces caractéristique par respectivement 1 (visible), 0 (caché), -1 (disparu)
let etatCartes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//Ensuite on crée les différentes variables nécessaires au jeu. 
let retournees = [];
let pairestrouves = 0;

//On n'ajoute pas le .src à la fin pour pouvoir avoir une liste d'objet. Ainsi, plus tard, on peut y ajouter l'élément "numéro"
const cartes = document.querySelector("table").querySelectorAll("img");




//les fonction nécessaire à son bon déroulement
//création de la fonction initialisation qui permet de réinitialiser le jeu à chaque chargement de page, et de mettre les cartes à différentes places. 
function initialisation(){
    for(let position=(nomCartes.length-1); position >=1; position--){
        const hasard = Math.floor(Math.random()*(position+1))
        const enregistre = nomCartes[position];
        nomCartes[position] = nomCartes[hasard];
        nomCartes[hasard] = enregistre;
    }
};

//création de la fonction qui change l'affichage des cartes. 
function affichageCarte(numero){
    if (etatCartes[numero] == 0) {
        cartes[numero].src="../../image/memory/doscarte.png";
        cartes[numero].alt=desnormaleCartes+numero;
    } else if (etatCartes[numero] == 1) {
        cartes[numero].src="../../image/memory/duo"+nomCartes[numero]+".png";
        cartes[numero].alt=desCartes[numero];
    } else {
        cartes[numero].style.visibility = "hidden";
    };
};

//création de la fonction jeu qui retournera les cartes et fera le jeu en soi. 
function jeu(numero){
    //on vérifie déjà qu'il n'y a pas deux cartes retournées :
    if (retournees.length < 2) {
        //on ne créé un changement d'état que si l'état de la carte est à 0. On ne peut pas retourner une carte déjà retourné et une carte disparue est... disparue. 
        if (etatCartes[numero] == 0) {
            etatCartes[numero]= 1;
            retournees.push(numero);
            affichageCarte(numero);
        }
    } 
    if (retournees.length==2) {
        //le cas où il y a deux cartes retournées (il ne peut pas y en avoir plus)
        let etat = 0;
        console.log(pairestrouves);
        //donc si le premier caractère du nom est le même. 
        if (nomCartes[retournees[0]][0]==nomCartes[retournees[1]][0]){
            etat = -1
            pairestrouves += 1;
        }
        etatCartes[retournees[0]]=etat;
        etatCartes[retournees[1]]=etat;

        setTimeout(function(){
            affichageCarte(retournees[0]);
            affichageCarte(retournees[1]);
            retournees=[];
        },1000);
        
        if (pairestrouves == 10){
            alert("Vous avez trouvée toutes les bonnes paires ! La clé privée pour reconvertir le texte est : 426053483");
        };
        
    };
};

//On initialise le jeu avant qu'il ne commence.
initialisation();

//On créé la fonction qui s'applique à l'image sur laquelle on clique qui permet de lancer le jeu. 


for(let i=0; i < cartes.length;i++) {
    //ajout de l'élément numéro aux objets présents dans cartes. 
    cartes[i].numero=i;
    //document.querySelector("table").querySelector(cartes[i]).addEventListener('click', function(){
    cartes[i].onclick=function(){
        jeu(this.numero);
}};