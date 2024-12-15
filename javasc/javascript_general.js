//On crée la fonction nécessaire pour la création de la barre de recherche
function rechercher() {
    //On récupère la valeur entrée dans la barre de recherche et on l'a met en minuscule
    const element = document.querySelector("input").value.toLowerCase();
    //On récupère l'intégralité du texte situé dans la page
    const doc = document.querySelector("main").textContent.toLowerCase;

    //Soit l'élément est dans la page (avec utilisation méthode index of qui renvoie -1 si elle est absente) soit il n'y est pas. 
    if (doc.indexOf(element) != -1){
        //faire le code pour se rendre à l'élément :D

    } else {
        //on prévient si l'élément n'a pas été 
        alert('" ' + element +' "' + "n'est pas présent dans la page.");
    }
}