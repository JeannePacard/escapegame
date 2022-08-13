const mdp = document.querySelector(".mdp");
const hidden = document.querySelector(".hidden");
const error = document.querySelector(".error");
const content = document.querySelector(".content");

function getValue() {
  if (
    mdp.value == "promo2022" ||
    mdp.value == "sirinebenamour" ||
    mdp.value == "mathieubenech" ||
    mdp.value == "coralienicolle"
  ) {
    hidden.style.display = "block";
    content.style.display = "none";
  } else {
    error.textContent = "Mot de passe incorrect";
  }
}
