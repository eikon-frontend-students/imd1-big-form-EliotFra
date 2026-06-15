const openPopupBtn = document.getElementById("openPopupBtn");
const popupOverlay = document.getElementById("popupOverlay");
const redirectButtons = document.querySelectorAll(".btn-redirect");

const pageInterneDestination = "validate.html";

openPopupBtn.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
});

redirectButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = pageInterneDestination;
  });
});

popupOverlay.addEventListener("click", (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});
