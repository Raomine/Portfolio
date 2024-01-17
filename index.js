document.addEventListener("DOMContentLoaded", function () {
  // Ajoutez un gestionnaire d'événements à tous les liens de navigation
  var navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien

      var targetId = this.getAttribute("href").substring(1); // Récupère l'ID de la section cible
      var targetSection = document.getElementById(targetId); // Obtient la section cible
      var headerHeight = document.querySelector("header").offsetHeight; // Obtient la hauteur du header

      // Fait défiler vers la section cible avec un décalage négatif en fonction de la hauteur du header
      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        behavior: "smooth", // Fait défiler en douceur
      });
    });
  });
});
