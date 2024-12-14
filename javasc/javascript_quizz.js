const lesQuestions = [
        {
            "id": 1,
            "question": "A quelle date Cynthia est elle née ?",
            "solution": ["27 Juin 1958"],
            "choix": [ "27 Juin 1958", "3 Octobre 1972"," 25 Mars 1862", "3 Décembre 1954"]
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
            "solution": ["cours de langage formel"],
            "choix": [ "cours de cryptologie", "cours de langage formel","cours de correction d’erreur"]
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
            "solution": ["attaque de Proos", "Combine de NTRU"],
            "choix": [ "attaque de Proos", "Attaque par déni de service","Fishing", "Combine de NTRU"]
        },
{
            "id": 8,
            "question": "Avec quel domaine Cynthia Dwork considère que la notion d’équité informatique entre en contact ?",
            "solution": "La politique",
            "choix": [ "La physique", "La philosophie","La politique", "La psychologie"]
        },
{
            "id": 9,
            "question": "Quel est le cours qui a poussé Cynthia Dwork à mettre en pause ses études ?",
            "solution": "cours de circuit",
            "choix": [ "cours de programmation", "cours de circuit", "cours de base de données", "cours de cryptologie"]
        },
{
            "id": 10,
            "question": "Quel est la profession de Helen Missenbaum qui l’a orienté vers les questions de vie privée ?",
            "solution": "Philosophe",
            "choix": [ "Physicien", "Informaticien", "Philosophe","Photographe"]
        },

]



function AfficherQuestion(uneQ, nbr) {
    let codeHTML;
    codeHTML = "<article id=\""+uneQ.id+"\">";
    codeHTML += "<h2> Question " + nbr + "</h2>";
    codeHTML += "<h3>Question : " + uneQ.question + "</h3>";
    codeHTML += "<h3>" + uneQ.question + "</h3>";
    codeHTML += "<h3>Qui l'a dit ?</h3> ";
    codeHTML += "<ul>"
    for (const cel of maQ.possibilités) 
        codeHTML +="<li>"+cel+"</li>"
    codeHTML += "</ul>";
    codeHTML += "</article>";
    return (codeHTML);

}

function integrerLesQuestions(lesQ) {
    let codeHTML = "";
    let numero = 0;
    for (const uneQ of lesQ)
        numero += 1;
        codeHTML += AfficherQuestion(uneQ, numero);
    return(codeHTML)

}
