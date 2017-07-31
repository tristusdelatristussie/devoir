$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});



// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son prenom
// - son  (la personne qui l'a publié)
var annu = [{
        nom: "So Foot",
        prenom: "http://sofoot.com",
    },
    {
        nom: "Guide d'autodéfense numérique",
        prenom: "http://guide.boum.org",
    },
    {
        nom: "L'encyclopédie en ligne Wikipedia",
        prenom: "http://Wikipedia.org",
    },
    {
        nom: "L'encyclopédie en ligne Wikipedia",
        prenom: "http://Wikipedia.org",
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

if (!/chercher/.test(window.location.href)) {

    var contenu = document.getElementById("contenu");
    var divForm = document.createElement("div");
    divForm.style.paddingBottom = "15px";
    var liste = document.createElement("div");
    var divMessage = document.createElement("div");

    // divMessage.classList.add("elemList");
    // divMessage.style.height = "40px";
    // divMessage.style.backgroundColor = "#DFF2FF";
    // divMessage.style.color = "#428bca";
    // divMessage.style.fontSize = "1.5em";

    liste.style.height = "40px";
    liste.style.backgroundColor = "#DFF2FF";
    liste.style.color = "#428bca";
    liste.style.fontSize = "1.5em";



    contenu.appendChild(divForm);
    contenu.appendChild(liste);




    annu.forEach(function(element) {

        var ele = document.createElement("div");
        ele.innerHTML = element.nom + " " + element.prenom;
        ele.style.color = "#428bca";
        ele.style.textDecoration = "none";
        ele.style.marginRight = "5px";
        ele.style.marginBottom = "5px";
        ele.style.padding = "10px";
        ele.style.backgroundColor = "#DFF2FF";
        ele.style.height = "40px";

        liste.appendChild(ele);

    }, this);



}

if (/chercher/.test(window.location.href)) {

    var oncli = document.getElementById("clic");
    var champRech = document.getElementById("rech").value;


    function recherche() {


        for (i = 0; i < annu.length; i++) {
            if (annu[i].prenom.indexOf(champRech) > -1 || annu[i].nom.indexOf(champRech) > -1) {
                document.getElementsByClassName("container").innerHTML = annu[i];
            } else {
                alert("ca marche pas");
            }




        }



    }
    oncli.onClick = recherche();
}