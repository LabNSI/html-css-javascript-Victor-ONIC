function init () {
  document.getElementById("terminale").onsubmit=resultat;
  var sReq = window.location.search.substring(1);

  if(sReq!=="")
  {
      const good = "NUMERIQUE_SC_INFORM";
      var aReq = sReq.split("&");
      var mess = "";
      var aVar = [];
      for (var i=0;i<aReq.length;i++) {
        aVar[i] = aReq[i].split("=");
      }

      mess = aVar[0][1]+" "+aVar[1][1]+" de "+aVar[2][1]+": ";

      if(aVar[3][0] == good || aVar[4][0] == good)
      {
        mess += "Bon choix!";
      }
      else {
        mess += "Mauvais choix!";
      }

      document.getElementById('resultat').innerHTML = mess;
  }
}

//ajouter les commentaires utiles

function resultat() {
  var f = document.forms["terminale"];

  // initialisation de la variable message
  var message = "Compléter les champs :";

  // Vérifier si le prénom a été saisi. Si non (chaine vide), ajouter "\n- Prénom" à message
  if(f.elements["prenom"].value == "")  {
    message += "\n- Prénom";
  }

  // Vérifier si le nom a été saisi. Si non (chaine vide), ajouter "\n- Nom" à message
  if(f.elements["nom"].value == "")  {
    message += "\n- Nom";
  }

  // Vérifier si un des points indiquant la classe a été choisi. Si les trois points ne sont pas cochés, ajouter "\n- Classe" à message
  if(!f.elements[2].checked && !f.elements[3].checked && !f.elements[4].checked){
    message += "\n- Classe";
  }

  var cpt = 0;
  // Les éléments 5 à 11 du formulaire sont les cases à cocher du choix de spécialités
  // Ajouter 1 à cpt lorsqu'une case du choix de spécialités est cochée
  for (var i=5; i < 12; i++)  {
    if(f.elements[i].checked){
      cpt++;
    }
  }

  // S'il n'y a pas exactement 2 cases cochées, ajouter "\n- Deux spécialités" à message
  if(cpt!=2){
    message += "\n- Deux spécialités";
  }

  // Si message n'est plus égale à sa valeur lors de son initialisation, c'est-à-dire que des champs du formulaire ont été omis, créer une alerte avec message
  if(message != "Compléter les champs :"){
    alert(message);
    return 0;
  }

  // Préparer le message à afficher
  message = f.elements["prenom"].value + " " +
            f.elements["nom"].value + " de " +
            f.elements["classe"].value;

  // Si la case correspondant à la spéccialité NSI a été cochée, ajouter "\nTu as fais le bon choix!" à message, sinon ajouter "\nEs-tu sur de ton choix?!" à message
  if(f.elements["NUMERIQUE_SC_INFORM"].checked){
    message += "\nTu fais le bon choix!";
  }
  else {
    message += "\nEs-tu sur de ton choix?!";
  }

  alert(message);
}

window.onload = init;
