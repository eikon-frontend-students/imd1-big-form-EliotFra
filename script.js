const modal = document.getElementById("modal");
const btnOuvrir = document.getElementById("btn-open");
const btnFermer = document.getElementById("btn-fermer");

// Ouvrir la modale
btnOuvrir.addEventListener("click", function () {
  modal.style.display = "flex";
});

// Fermer avec le bouton
btnFermer.addEventListener("click", function () {
  modal.style.display = "none";
});

// Fermer en cliquant sur le fond sombre
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
