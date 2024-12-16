//description du contenu des questions et des bonnes réponses. 
const lesQuestions = [
    {
        "id": 1,
        "question": "A quelle date Cynthia Dwork est elle née ?",
        "solution": ["27 Juin 1958"],
        "choix": [ "27 Juin 1958", "3 Octobre 1972","25 Mars 1862", "3 Décembre 1954"]
    },
{
        "id": 2,
        "question": "Pourquoi a-t-elle débuté l’informatique ?",
        "solution": ["Par curiosité"],
        "choix": [ "Par passion", "Par pression de sa famille","Par curiosité", "Dans la continuité de ses précédentes études"]
    },
{
        "id": 3,
        "question": "Qui est son superviseur durant son doctorat ?",
        "solution": ["John Hopcroft"],
        "choix": [ "Richard Stallman", "Nancy Lynch","Moni Naor", "John Hopcroft"]
    },
{
        "id": 4,
        "question": "Quel cours a rendu Cynthia Dwork passionnée en troisième année d’étude ?",
        "solution": ["Cours de langage formel"],
        "choix": [ "Cours de cryptologie", "Cours de langage formel","Cours de correction d’erreur","Cours de programmation"]
    },
{
        "id": 5,
        "question": "Dans quel établissement Cynthia Dwork n’est pas chercheuse ?",
        "solution": ["Université de Princeton"],
        "choix": [ "Université Harvard", "Institut Alan Turing", "Microsoft", "Université de Princeton"]
    },
{
        "id": 6,
        "question": "Avec qui Cynthia Dwork a-t-elle travaillé sur le concept (nommé plus tard) comme « Proof of Work » ?",
        "solution": ["Moni Naor"],
        "choix": [ "Moni Naor", "Charles Babbage","Corrado Böhm", "Edgar F.Codd"]
    },
{
        "id": 7,
        "question": "Contre quels attaques l’immunité des schémas de chiffrement contre les erreurs de déchiffrement peut servir ?",
        "solution": ["Attaque de Proos", "Combine de NTRU"],
        "choix": [ "Attaque de Proos", "Attaque par déni de service","Fishing", "Combine de NTRU"]
    },
{
        "id": 8,
        "question": "Avec quel domaine Cynthia Dwork considère que la notion d’équité informatique entre en contact ?",
        "solution": ["La politique"],
        "choix": [ "La physique", "La philosophie","La politique", "La psychologie"]
    },
{
        "id": 9,
        "question": "Quel est le cours qui a poussé Cynthia Dwork à mettre en pause ses études ?",
        "solution": ["cours de circuit"],
        "choix": [ "cours de programmation", "cours de circuit", "cours de base de données", "cours de cryptologie"]
    },
{
        "id": 10,
        "question": "Quelle est la profession de Helen Missenbaum qui l’a orienté vers les questions de vie privée ?",
        "solution": ["Philosophe"],
        "choix": [ "Physicien", "Informaticien", "Philosophe","Photographe"]
    },

]


//Définition du code pour afficher les questions
function AfficherQuestion(uneQ) {
let codeHTML;
codeHTML = "<article id=\""+uneQ.id+"\">";
codeHTML += "<h3>" + uneQ.question + "</h3>";
codeHTML += "<ul>"
for (const cel of uneQ.choix) {
    codeHTML += "<li><input type=\"checkbox\"/>";
    codeHTML +="<label for=\""+cel+"\">"+cel+"</label></li>";
}
codeHTML += "</ul>"; 
codeHTML += "<footer> <p> Question " + uneQ.id + "</p> </footer>";
codeHTML += "</article>";
return (codeHTML);

}

//On crée le code HTML avec toutes les questions
function integrerLesQuestions(lesQ) {
let codeHTML = "";
for (const uneQ of lesQ) 
    //intégrer le fait qu'il n'y a qu'une qui apparaît à la fois.
    codeHTML += AfficherQuestion(uneQ);
return(codeHTML)

}

//On créé le code qui intègre les questions à la page
document.querySelector("section").innerHTML = integrerLesQuestions(lesQuestions);


//on définit un comportement pour les li
for (const li of document.querySelectorAll("article li")){
li.addEventListener('click', function () {
    if (li.querySelector("strong") === null) li.innerHTML = "<input type=\"checkbox\" checked/><label><strong>" + li.textContent + "</strong></label>";
    else li.innerHTML = "<input type=\"checkbox\"/><label>" + li.textContent + "</label>";
});
}

//définition de la fonction qui analyse si la réponse est bonne
function bonnesReponses(reponse, id, lesQuestions){
//on cherche d'abord la bonne question parmi l'ensemble des questions
for (maQ of lesQuestions){
    if (maQ.id == id) {
        //Comme il existe des question avec plusieurs choix, on se retrouver avec des array qu'on ne peut pas comparer directement entre eux. On vérifie d'abord le nombre de bonnes réponses.
        let nbrrep = maQ.solution.length;
        //on vérfie si il y a autant de réponses chez le joueur que de bonnes reponses
        if (nbrrep == reponse.length){
            for (repjuste of maQ.solution) {
                //on vérifie que chaque réponse du joueur est dans la liste des bonnes réponses
                for (repjoueur of reponse) {
                    if (repjuste == repjoueur){
                        //a chaque bonne réponse, on retire 1 à nbrrep car il y a une bonne reponse en moins à trouver
                        nbrrep -= 1;
                    };
                };
            };
        };
        if (nbrrep == 0){
            return true
        } 
        else {
            return false
        };
    };
};
};



//définition du bouton fin et de son comportement
document.querySelector("#fin").addEventListener('click', function () {
let BonnesRep = 0;
//on vérifie question par question
for (const ques of document.querySelectorAll("article")) {
    let repQuest = [];
    //on stocke dans repQuest pour chaque question, chaque réponse répondu
    for (const rep of ques.querySelectorAll("strong")) {
        repQuest.push(rep.innerText);
    };
    //on vérifie que la réponse est juste
    if (bonnesReponses(repQuest, ques.id, lesQuestions) == true ) {
        //et on ajoute un si c'est le cas
        BonnesRep +=1;
    };
};

if (BonnesRep == 10) {
    alert("Vous avez trouvé toutes les bonnes réponses ! La clé publique pour déchiffrer le code RSA est : 19580627");
} else {
    alert("Vous n'avez eu que " + BonnesRep + " bonnes réponses. Retentez à nouveau !");
}
});