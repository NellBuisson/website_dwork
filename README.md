# Aplication Web sur Cynthia Dwork 

Projet d'application web sur Cynthia Dwork dans le cadre de ma formation MIASHS à l'université Toulouse Jean Jaurès. 
Elle permet de présenter la vie de Cynthia Dwork et ses principaux travaux. Elle contient également un quizz et un memory pour tester les connaissances apprises.
Elle a été développée de Septembre 2024 à Décembre 2024.
L'application peut être consultée à l'adresse ci-dessous : 
https://mi-phpmut.univ-tlse2.fr/~pensee.buisson/projetPartie4/code_html/

Elle a été conçue pour un écran de taille 1920 x 1080 et n'est pas adapté pour le changement de taille de l'écran par manque de temps.

## Développement

### Code HTML
Le site est composé de 5 pages distinctes codés en HTML. 
Toutes les pages possèdent une partie commune avec le head contenant les informations de la page et le lien vers les feuilles CSS et Javascript qui personnalisent l'apparence de la page et ses intéractions. 

Dans le body se trouvent un header qui contient le titre de l'application et un menu permettant de s'orienter dans les différentes pages. 

La page index contient toutes les informations de base sur l'application et sa conception. 
La page biographie se constitue d'une photo et de deux sous-titres. Lorsqu'on clique sur les sous-titres de la page, le texte relatif à la période concernée de la vie de Cynthia Dwork apparaît en-dessous. 
La page oeuvre se constitue de quatres livres fermés, qui permmettent, lorsqu'on clique dessus d'ouvrir le livre et de faire apparaître une bulle dans laquelle est décrit l'accomplissement relatif au titre auquel Cynthia Dwork a contribué. 

Les pages memory et quizz sont un peu plus particulièrement car ne contienne qu'un sous-titre et, dans le cas du memory, vingt cartes face cachés. Il s'agit de page dont la majorité du travail se retrouve dans les feuilles Javascript attribuées.

### Code CSS
Chaque page est relié à deux feuilles css. L'une d'entre elle est commune à chacune : il s'agit de l'apparence commune entre chaque page. Elle permet principalement de mettre en forme l'arrière plan et le header. 
La deuxième feuille contient les instructions personnalisés pour chaque page, comme la gestion des images ou des h3 qui changent continuellement, ainsi que le changement de display selon les besoins de la page. 

### Code JavaScript
Seules trois pages possèdent un code JavaScript : celle contenant les oeuvres de Cynthia Dwork, celle pour le quizz et celle pour le memory. 

La feuille contenant le code pour les oeuvres permet de changer l'alternance entre les différentes ouvertures des images de livres de sorte qu'un seul livre s'ouvre à la fois. 

La feuille contenant le code pour le memory est plus complexe. Il permet, en considérant les états de carte comme trois (caché, de dos, de face) de distribué en début de partie les cartes de manière aléatoire, et organisé le jeu de sorte que si une bonne paire est trouvé, elle disparaît. Sinon, les cartes se remettent de dos. A la fin du jeu, le code permet d'afficher une fenêtre pop félicitant le joueur. 

La feuille contenant le code pour le quizz est encore différente. Chaque question du quizz est inclu dans un Array d'objet, décrivant l'id de la question, la question, un array pour les différentes solutions et les choix disponibles. Le code permet d'insérer du code HTML dans la balise section du code HTML déjà présent. Les questions sont toutes affichées en même temps, et ce n'est que lorsqu'on clique sur le bouton de fin que le calcul du nombre de bonnes réponses apparaît, dans une fenêtre pop. 


