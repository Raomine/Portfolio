window.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let targetId = this.getAttribute("href").substring(1);
      let targetSection = document.getElementById(targetId);
      let headerHeight = document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        behavior: "smooth",
      });
    });
  });
});

let currentSlideIndex = 0;
let currentProject = null;

let projects = {
  project2: {
    title: "Premiers pas sur le langage HTML",
    description: `Le projet consistait à modifier le site web de l'association Riding Cities pour le faire correspondre à une maquette donnée. Voici les actions entreprises pour atteindre cet objectif : 
    1. Création de la section "Les membres fondateurs" 
    2. Évolution de la section de bas de page avec le bouton de téléchargement`,
    images: [
      "../assets/P2-membres-fondateurs.jpg",
      "../assets/P2-bas-de-page.jpg",
    ],
  },

  project3: {
    title: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
    description:
      "Ce projet consistait à créer la page d'accueil d'une agence de voyage en utilisant HTML et CSS. À travers différentes étapes, j'ai mis en place l'environnement de développement, découpé la maquette, intégré les différents éléments tels que le header, le formulaire de recherche, les filtres, les cartes d'hébergement et d'activités, ainsi que le footer. J'ai également assuré la compatibilité du site avec les différents écrans grâce au responsive design. En respectant les bonnes pratiques et en vérifiant la qualité du code.",
    images: [
      "../assets/P3-header.jpg",
      "../assets/P3-form.jpg",
      "../assets/P3-filters.jpg",
      "../assets/P3-hebergements.jpg",
      "../assets/P3-activites.jpg",
      "../assets/P3-footer.jpg",
      "../assets/P3-Booki.jpg",
    ],
  },

  project4: {
    title: "Améliorez l'interface d'un site mobile avec des animations CSS",
    description:
      "Au cours de ce projet, j'ai établi un environnement de développement solide, intégré la version mobile de la page d'accueil du site avec des animations CSS harmonieuses, assuré sa réactivité pour différents appareils, et reproduit ce processus pour les pages des restaurants. J'ai maintenu une structure claire et optimisé l'efficacité du code en utilisant Sass et en évitant les duplications inutiles. Enfin, j'ai effectué une revue minutieuse pour garantir la conformité aux maquettes et la qualité du rendu final.",
    images: [
      "../assets/P4-homepage.jpg",
      "../assets/P4-resto1.jpg",
      "../assets/P4-resto2.jpg",
      "../assets/P4-resto3.jpg",
      "../assets/P4-resto4.jpg",
    ],
  },

  project5: {
    title: "Premiers pas sur le langage JavaScript",
    description: `Au cours de ce projet, j'ai réalisé les étapes suivantes pour créer un carrousel dynamique :
    Étape 1 : Mise à jour du code HTML
    Étape 2 : Ajout d'Event Listeners sur les flèches
    Étape 3 : Ajout des bullet points au slider
    Étape 4 : Modification du slide au clic sur le bouton
    Étape 5 : Mise en place du défilement infini sur le carrousel`,
    images: [
      "../assets/P5-carousel1.jpg",
      "../assets/P5-carousel2.jpg",
      "../assets/P5-carousel3.jpg",
      "../assets/P5-carousel4.jpg",
    ],
  },
  project6: {
    title: "Créez une page web dynamique avec JavaScript",
    description: "Description du projet 2",
    images: ["../assets/booki.jpg", "../assets/kasa.jpg"],
  },
  project7: {
    title: "Planifiez le développement du site de votre client",
    description: "Description du projet 2",
    images: ["../assets/projet2-image1.jpg", "../assets/projet2-image2.jpg"],
  },
  project8: {
    title: "Créez une application web de location immobilière avec React",
    description: "Description du projet 2",
    images: ["../assets/booki.jpg", "../assets/kasa.jpg"],
  },
  project9: {
    title: "Optimisez le référencement d'un site de photographe",
    description: "Description du projet 2",
    images: ["../assets/projet2-image1.jpg", "../assets/projet2-image2.jpg"],
  },
  project10: {
    title: "Débuggez le site d'une agence d'événementielt",
    description: "Description du projet 2",
    images: ["../assets/booki.jpg", "../assets/kasa.jpg"],
  },
  project11: {
    title: "Implémentez le front-end d'une application bancaire avec React",
    description: "Description du projet 2",
    images: ["../assets/projet2-image1.jpg", "../assets/projet2-image2.jpg"],
  },
};

function openModal(projectKey) {
  let project = projects[projectKey];
  document.getElementById("modalTitle").innerText = project.title;
  document.getElementById("modalDescription").innerText = project.description;

  document.getElementById("projectModal").style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("overlay").style.display = "block";

  currentSlideIndex = 0;
  currentProject = project;
  updateModalContent();
}

function updateModalContent() {
  let modalImage = document.getElementById("modalImage");
  modalImage.src = currentProject.images[currentSlideIndex];

  let prevButton = document.querySelector(".prev");
  let nextButton = document.querySelector(".next");

  // Affiche ou masque les boutons de navigation en fonction de la position de la diapositive
  prevButton.style.display = currentSlideIndex === 0 ? "none" : "block";
  nextButton.style.display =
    currentSlideIndex === currentProject.images.length - 1 ? "none" : "block";
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateModalContent();
  }
}

function nextSlide() {
  if (currentSlideIndex < currentProject.images.length - 1) {
    currentSlideIndex++;
    updateModalContent();
  }
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
  document.body.style.overflow = "";
  document.getElementById("overlay").style.display = "none";
}

window.onclick = function (event) {
  let overlay = document.getElementById("overlay");
  if (event.target === overlay) {
    overlay.style.display = "none";
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = "";
  }
};
