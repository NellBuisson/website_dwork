//on va définir le changement des livres fermés par des livres ouverts. 

document.querySelector("#titre1").addEventListener('click', function() {
    //On ouvre le livre en changeant la valeur du src. 
    document.querySelector("#titre1").src = "../image/oeuvres/ouvert.png";
    
    //à partir d'ici, je vérifie qu'aucun autre livre était ouvert. Si il y en a un ouvert, je le ferme.
    //la méthode .indexOf() sert à trouver si la chaîne entre parenthèse est présente dans la chaîne demandé. Si elle n'y est pas, elle renvoie -1.
    if (document.querySelector("#titre2").src.indexOf("livre2") == -1) {
        document.querySelector("#titre2").src = "../image/oeuvres/livre2.png"
    }
    if (document.querySelector("#titre3").src.indexOf("livre3") == -1) {
        document.querySelector("#titre3").src = "../image/oeuvres/livre3.png"
    }
    if (document.querySelector("#titre4").src.indexOf("livre4") == -1) {
        document.querySelector("#titre4").src = "../image/oeuvres/livre4.png"
    }
    
    
})

document.querySelector("#titre2").addEventListener('click', function() {
    //On ouvre le livre en changeant la valeur du src. 
    document.querySelector("#titre2").src = "../image/oeuvres/ouvert.png";

    //à partir d'ici, je vérifie qu'aucun autre livre était ouvert. Si il y en a un ouvert, je le ferme.
    //la méthode .indexOf() sert à trouver si la chaîne entre parenthèse est présente dans la chaîne demandé. Si elle n'y est pas, elle renvoie -1.
    if (document.querySelector("#titre1").src.indexOf("livre1") == -1) {
        document.querySelector("#titre1").src = "../image/oeuvres/livre1.png"
    }
    if (document.querySelector("#titre3").src.indexOf("livre3") == -1) {
        document.querySelector("#titre3").src = "../image/oeuvres/livre3.png"
    }
    if (document.querySelector("#titre4").src.indexOf("livre4") == -1) {
        document.querySelector("#titre4").src = "../image/oeuvres/livre4.png"
    }
    
})

document.querySelector("#titre3").addEventListener('click', function() {
    //On ouvre le livre en changeant la valeur du src. 
    document.querySelector("#titre3").src = "../image/oeuvres/ouvert.png";
    
    //à partir d'ici, je vérifie qu'aucun autre livre était ouvert. Si il y en a un ouvert, je le ferme.
    //la méthode .indexOf() sert à trouver si la chaîne entre parenthèse est présente dans la chaîne demandé. Si elle n'y est pas, elle renvoie -1.
    if (document.querySelector("#titre2").src.indexOf("livre2") == -1) {
        document.querySelector("#titre2").src = "../image/oeuvres/livre2.png"
    }
    if (document.querySelector("#titre1").src.indexOf("livre1") == -1) {
        document.querySelector("#titre1").src = "../image/oeuvres/livre1.png"
    }
    if (document.querySelector("#titre4").src.indexOf("livre4") == -1) {
        document.querySelector("#titre4").src = "../image/oeuvres/livre4.png"
    }
    
})

document.querySelector("#titre4").addEventListener('click', function() {
    //On ouvre le livre en changeant la valeur du src. 
    document.querySelector("#titre4").src = "../image/oeuvres/ouvert.png";
    
    //à partir d'ici, je vérifie qu'aucun autre livre était ouvert. Si il y en a un ouvert, je le ferme.
    //la méthode .indexOf() sert à trouver si la chaîne entre parenthèse est présente dans la chaîne demandé. Si elle n'y est pas, elle renvoie -1.
    if (document.querySelector("#titre2").src.indexOf("livre2") == -1) {
        document.querySelector("#titre2").src = "../image/oeuvres/livre2.png"
    }
    if (document.querySelector("#titre3").src.indexOf("livre3") == -1) {
        document.querySelector("#titre3").src = "../image/oeuvres/livre3.png"
    }
    if (document.querySelector("#titre1").src.indexOf("livre1") == -1) {
        document.querySelector("#titre1").src = "../image/oeuvres/livre4.png"
    }
    
})

