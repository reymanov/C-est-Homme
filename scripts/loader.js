const heroIMG = document.querySelector(".hero__img");
const loader = document.querySelector("#loader__container");

if (heroIMG.complete) {
  loaded();
} else {
  heroIMG.addEventListener("load", loaded);
}

function loaded() {
  loader.style.display = "none";
}
