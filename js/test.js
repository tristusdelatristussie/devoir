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

   var oncli = document.getElementById("clic");


   function recherche() {

       var champRech = document.getElementById("rech").value;

       for (i = 0; i < annu.length; i++) {
           if (annu[i].prenom.indexOf(champRech) > -1 || annu[i].nom.indexOf(champRech) > -1) {
               document.getElementsByTagName("body").innerHTML(JSON.stringify(annu[i]));
           } else {
               alert("ca marche pas");
           }




       }



   }

   oncli.addEventListener("click", recherche);