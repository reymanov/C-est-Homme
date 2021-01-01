const heroIMG = document.querySelector(".hero__img");
const loaderContainer = document.querySelector("#loader__container");
const loader = document.querySelector(".loader");

setTimeout(() => {
  if (heroIMG.complete) {
    loaded();
  } else {
    heroIMG.addEventListener("load", loaded);
  }
}, 2000);

function loaded() {
  loader.style.opacity = "0";
  setTimeout(() => {
    loaderContainer.style.opacity = "0";

    const t1 = gsap.timeline({ defaults: { opacity: 0 } });

    t1.from(".hero__greybox", { y: 500, duration: 0.8 })
      .from(".hero__img", { x: -1200, duration: 1.2 })
      .from(".title-1", { duration: 1 }, "-=.6")
      .from(".title-2", { duration: 1 }, "-=.6")
      .from(".title-3", { duration: 1 }, "-=.6");
  }, 500);

  setTimeout(() => {
    document.documentElement.style.overflowY = "auto";
    document.body.scrollY = "yes";

    loaderContainer.style.display = "none";
  }, 500);
}

if ((loaderContainer.style.opacity = "100")) {
  document.documentElement.style.overflow = "hidden";
  document.body.scroll = "no";
}
