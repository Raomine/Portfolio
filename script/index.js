// script thème
const themeButton = document.getElementById("themeButton");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const links = document.querySelectorAll("nav a");
const animated = document.querySelector(".animated-text");
const animatedSpan = document.querySelector(".animated-text span");
const headers = document.querySelectorAll(".header");
const footer = document.querySelector("footer");
const sectionsColor = document.querySelectorAll("section");
const text = document.querySelectorAll("body, a");
const pColor = document.querySelector(".profile p");

themeButton.addEventListener("click", function () {
  header.classList.toggle("light");
  logo.classList.toggle("light2");
  animated.classList.toggle("light4");
  animatedSpan.classList.toggle("light5");
  headers.forEach((header) => {
    header.classList.toggle("light6");
  });
  footer.classList.toggle("light6");
  sectionsColor.forEach((section) => {
    section.classList.toggle("light7");
  });
  text.forEach((text) => {
    text.classList.toggle("light8");
  });
  pColor.classList.toggle("light9");
});

// Script pour déplacer le bouton au clic

themeButton.addEventListener("click", function () {
  themeButton.classList.toggle("move-right");
});

// Déplacement entre section
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const header = document.querySelector("header");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      // Masquer le header
      header.classList.add("hide");

      // Récupérer l'ID de la section cible
      const targetId = navLink.getAttribute("href").substring(1);

      // Masquer la section actuelle
      const currentSection = document.querySelector("section:not(.hide)");
      if (currentSection) {
        currentSection.classList.add("hide");
      }

      // Afficher la section cible
      document.getElementById(targetId).classList.remove("hide");
    });
  });

  // Gestion des logos de section
  const sectionLogos = document.querySelectorAll(".logo");
  sectionLogos.forEach(function (logo) {
    logo.addEventListener("click", function () {
      // Retirer la classe qui masque le header
      header.classList.remove("hide");

      // Masquer la section actuelle
      const currentSection = document.querySelector("section:not(.hide)");
      if (currentSection) {
        currentSection.classList.add("hide");
      }
    });
  });
});

// Animation Hicham
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("header nav a");
  var animatedText = document.getElementById("animatedText");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      var textToAnimate = animatedText.firstChild;
      animatedText.style.display = "block";
      textToAnimate.classList.add("animate");

      textToAnimate.addEventListener("animationend", function () {
        textToAnimate.classList.remove("animate");

        animatedText.style.display = "none";
        textToAnimate.removeEventListener("animationend", this);
      });
    });
  });
});

// Menu Nav
const toggleNavButton = document.querySelector(".toggle-nav");

const navMenu = document.querySelector("nav");

toggleNavButton.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// Fonction pour animer les titres
function animateTitle(title) {
  title.style.fontSize = "13vw";

  setTimeout(() => {
    title.style.fontSize = "0em";
  }, 2200);
}

// Créer un observateur d'intersection
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Vérifier si la section est dans le viewport
    if (entry.isIntersecting) {
      // Récupérer le titre de la section
      const title = entry.target.querySelector("h2");

      animateTitle(title);
    }
  });
});

const sectionsToObserve = document.querySelectorAll("section");

// Attacher l'observateur d'intersection à chaque élément à observer
sectionsToObserve.forEach((section) => {
  observer.observe(section);
});

//////////// Skillbars ////////////////
function startAnimation(element) {
  let skillLevel = element.querySelector(".skill-level");
  skillLevel.style.width = "var(--skill-level)";
  skillLevel.classList.remove("infinite");
}

function stopAnimation(element) {
  let skillLevel = element.querySelector(".skill-level");
  skillLevel.style.width = "var(--skill-level)";
}

////////////////// Modals /////////////////
let currentSlideIndex = 0;
let currentProject = null;

let projects = {
  project2: {
    title: "Premiers pas sur le langage HTML",
    description: `Le projet consistait à modifier le site web de l'association Riding Cities pour le faire correspondre à une maquette donnée. Voici les actions entreprises pour atteindre cet objectif : 
    1. Création de la section "Les membres fondateurs" 
    2. Évolution de la section de bas de page avec le bouton de téléchargement`,
    images: [
      "../assets/modals/P2-membres-fondateurs.jpg",
      "../assets/modals/P2-bas-de-page.jpg",
    ],
  },

  project3: {
    title: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
    description:
      "Ce projet consistait à créer la page d'accueil d'une agence de voyage en utilisant HTML et CSS. À travers différentes étapes, j'ai mis en place l'environnement de développement, découpé la maquette, intégré les différents éléments tels que le header, le formulaire de recherche, les filtres, les cartes d'hébergement et d'activités, ainsi que le footer. J'ai également assuré la compatibilité du site avec les différents écrans grâce au responsive design. En respectant les bonnes pratiques et en vérifiant la qualité du code.",
    images: [
      "../assets/modals/P3-header.jpg",
      "../assets/modals/P3-form.jpg",
      "../assets/modals/P3-filters.jpg",
      "../assets/modals/P3-hebergements.jpg",
      "../assets/modals/P3-activites.jpg",
      "../assets/modals/P3-footer.jpg",
      "../assets/modals/P3-Booki.jpg",
    ],
  },

  project4: {
    title: "Améliorez l'interface d'un site mobile avec des animations CSS",
    description:
      "Au cours de ce projet, j'ai établi un environnement de développement solide, intégré la version mobile de la page d'accueil du site avec des animations CSS harmonieuses, assuré sa réactivité pour différents appareils, et reproduit ce processus pour les pages des restaurants. J'ai maintenu une structure claire et optimisé l'efficacité du code en utilisant Sass et en évitant les duplications inutiles. Enfin, j'ai effectué une revue minutieuse pour garantir la conformité aux maquettes et la qualité du rendu final.",
    images: [
      "../assets/modals/P4-homepage.jpg",
      "../assets/modals/P4-resto1.jpg",
      "../assets/modals/P4-resto2.jpg",
      "../assets/modals/P4-resto3.jpg",
      "../assets/modals/P4-resto4.jpg",
    ],
    link: "https://github.com/Raomine/Projet_4",
  },

  project5: {
    title: "Premiers pas sur le langage JavaScript",
    description: `Au cours de ce projet, j'ai réalisé les étapes suivantes pour créer un carrousel dynamique :
    Étape 1 : Mise à jour du code HTML
    Étape 2 : Ajout d'Event Listeners sur les flèches
    Étape 3 : Ajout des bullet points au slider
    Étape 4 : Modification du slide au clic sur le bouton
    Étape 5 : Mise en place du défilement infini sur le carrousel
    Lien Github, <a href="https://github.com/Raomine/Projet_5" target="_blank">Projet 5</a>.`,
    images: [
      "../assets/modals/P5-carousel1.jpg",
      "../assets/modals/P5-carousel2.jpg",
      "../assets/modals/P5-carousel3.jpg",
      "../assets/modals/P5-carousel4.jpg",
    ],
    link: "https://github.com/Raomine/Projet_5",
  },

  project6: {
    title: "Créez une page web dynamique avec JavaScript",
    description: `Le projet consiste à créer une page web dynamique en utilisant JavaScript, en mettant en pratique les connaissances acquises sur ce langage. L'objectif était de réaliser plusieurs fonctionnalités (galerie d'images, page de connexion, modales) et de travailler avec des données dynamiques provenant d'une API.`,
    images: [
      "../assets/modals/P6-gallerie.jpg",
      "../assets/modals/P6-login.jpg",
      "../assets/modals/P6-modale1.jpg",
      "../assets/modals/P6-modale2.jpg",
    ],
    link: "https://github.com/Raomine/Projet_6",
  },

  project7: {
    title: "Planifiez le développement du site de votre client",
    description: `Mise en place d'une veille technique : J'ai effectué une recherche approfondie pour identifier les outils, langages et frameworks qui pourraient être utiles. Je les ai ensuite regroupé dans l'outils veille, Wakelet.
    Définition des besoins techniques : J'ai identifié les besoins techniques du projet, en détaillant les plugins, les librairies et autres solutions nécessaires à sa réalisation.
    Choix et configuration de l'outil de gestion de projet : J'ai sélectionné Trello, un outil de gestion de projet adapté.
    Découpage des tâches : J'ai découpé le projet en différentes tâches, en me concentrant d'abord sur les user stories prioritaires.
    Préparation de la présentation finale : Enfin, j'ai préparé les supports de présentation pour le client, en agrégeant les différents livrables dans une présentation PowerPoint.`,
    images: [
      "../assets/modals/P7-wakelet.jpg",
      "../assets/modals/P7-solutions-tech.jpg",
      "../assets/modals/P7-trello.jpg",
      "../assets/modals/P7-powerpoint.jpg",
    ],
  },

  project8: {
    title: "Créez une application web de location immobilière avec React",
    description:
      "Le projet consiste à créer une application web de location immobilière avec React. Les étapes clés incluent l'initialisation du projet avec Create React App, l'ajout de React Router pour le routage, la création des pages principales (accueil, À propos, page d'erreur), le développement de fonctionnalités spécifiques comme le carrousel pour les propriétés, la gestion des erreurs d'ID, et enfin la vérification globale du site. À chaque étape, la mise en page est optimisée avec Sass et les composants sont réutilisés autant que possible.",
    images: [
      "../assets/modals/P8-homepage.jpg",
      "../assets/modals/P8-about.jpg",
      "../assets/modals/P8-error.jpg",
      "../assets/modals/P8-logement.jpg",
    ],
    link: "https://github.com/Raomine/Projet_8",
  },

  project9: {
    title: "Optimisez le référencement d'un site de photographe",
    description:
      " J'ai, avec Lighthouse, analysé le code source, identifié les améliorations nécessaires, optimisé les performances, le SEO technique, intégré le référencement local et les réseaux sociaux, corrigé l'accessibilité, et généré des rapports finaux. Ce processus structuré a permis d'améliorer les performances et d'optimiser le référencement du site.",
    images: [
      "../assets/modals/P9-site1.jpg",
      "../assets/modals/P9-site2.jpg",
      "../assets/modals/P9-site3.jpg",
      "../assets/modals/P9-site4.jpg",
      "../assets/modals/P9-site5.jpg",
      "../assets/modals/P9-lighthouse.jpg",
    ],
    link: "https://github.com/Raomine/Projet_9",
  },

  project10: {
    title: "Débuggez le site d'une agence d'événementielt",
    description:
      "Dans ce projet de débogage pour une agence événementielle, j'ai suivi un processus méthodique en quatre étapes clés : mise en place de l'environnement de développement, identification et réparation des bugs, rédaction d'un cahier de recette, et ajout de tests supplémentaires.",
    images: [
      "../assets/modals/P10-site1.jpg",
      "../assets/modals/P10-site2.jpg",
      "../assets/modals/P10-site3.jpg",
      "../assets/modals/P10-site4.jpg",
      "../assets/modals/P10-site5.jpg",
      "../assets/modals/P10-cahier-de-recette.jpg",
    ],
    link: "https://github.com/Raomine/Projet_10",
  },

  project11: {
    title: "Implémentez le front-end d'une application bancaire avec React",
    description:
      "Ce projet a consisté à développer une application bancaire avec React, Redux et une API. Le frontend est concis et réutilisable. J'ai mis en place l'authentification des utilisateurs, développé la fonctionnalité de modification du nom d'utilisateur. J'ai également ajouté des éléments à la documentation Swagger.",
    images: [
      "../assets/modals/P11-homepage.jpg",
      "../assets/modals/P11-signin.jpg",
      "../assets/modals/P11-user.jpg",
    ],
    link: "https://github.com/Raomine/Projet_11",
  },
};

function openModal(projectKey) {
  let project = projects[projectKey];
  document.getElementById("modalTitle").innerText = project.title;
  document.getElementById("modalDescription").innerText = project.description;
  document.querySelector(".modal-content a").href = project.link;

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
