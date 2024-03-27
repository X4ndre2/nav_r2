document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner tous les éléments li.nav_main
    var mainNavItems = document.querySelectorAll('.nav_main');
  
    // Parcourir chaque élément li.nav_main et ajouter un gestionnaire d'événement de clic
    mainNavItems.forEach(function(item) {
      // Sélectionner le lien a à l'intérieur de cet élément
      var link = item.querySelector('a');
      link.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut du lien (pour éviter le défilement vers le haut)
        event.preventDefault();
  
        // Vérifier si l'élément est déjà ouvert (possède la classe menuopen)
        var isOpen = item.classList.contains('menuopen');
  
        // Si l'élément est ouvert, le fermer (enlever la classe menuopen)
        if (isOpen) {
          item.classList.remove('menuopen');
        } else {
          // Sinon, ajouter la classe menuopen
          // Supprimer la classe menuopen de tous les éléments li.nav_main sauf celui-ci
          mainNavItems.forEach(function(otherItem) {
            if (otherItem !== item) {
              otherItem.classList.remove('menuopen');
            }
          });
  
          // Ajouter la classe menuopen à cet élément
          item.classList.add('menuopen');
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner tous les liens a dans les éléments ul.nav-second-level
    var secondLevelNavLinks = document.querySelectorAll('.nav-second-level > li > a');
  
    // Parcourir chaque lien et ajouter un gestionnaire d'événement de clic
    secondLevelNavLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut du lien (pour éviter le défilement vers le haut)
        event.preventDefault();
  
        // Sélectionner l'élément parent li de ce lien
        var parentListItem = link.parentNode;
  
        // Vérifier si l'élément est déjà ouvert (possède la classe sousmenuopen)
        var isOpen = parentListItem.classList.contains('sousmenuopen');
  
        // Inverser l'état de l'ouverture du sous-menu
        parentListItem.classList.toggle('sousmenuopen', !isOpen);
      });
    });
  });


  