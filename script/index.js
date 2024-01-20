document.addEventListener("DOMContentLoaded", function () {
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

function openModal(title, imageSrc, description) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("modalDescription").innerText = description;

  document.getElementById("projectModal").style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("overlay").style.display = "block";
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
