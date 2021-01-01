// const t1 = gsap.timeline({ defaults: { opacity: 0 } });

// t1.from(".hero__greybox", { y: 500, duration: 0.8 })
//   .from(".hero__img", { x: -1200, duration: 1.2 })
//   .from(".title-1", { duration: 1 }, "-=.6")
//   .from(".title-2", { duration: 1 }, "-=.6")
//   .from(".title-3", { duration: 1 }, "-=.6");

const signatureContainer = document.querySelector(".signature");

gsap.from(signatureContainer.children, {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: signatureContainer,
    start: "10% center",
  },
});

const tb1 = document.querySelector(".p1-textbox");

gsap.from(".p1-img", {
  y: 200,
  opacity: 0,
  duration: 1,
  ease: "easeInOut",
  scrollTrigger: {
    trigger: ".p1",
    start: "30% center",
  },
});

gsap.from(tb1.children, {
  x: -100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".p1",
    start: "40% center",
  },
});

const tb2 = document.querySelector(".p2-textbox");

gsap.from(".p2-img", {
  y: 200,
  opacity: 0,
  duration: 1,
  ease: "easeInOut",
  scrollTrigger: {
    trigger: ".p2",
    start: "20% center",
  },
});

gsap.from(tb2.children, {
  x: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".p2",
    start: "30% center",
  },
});

const tb3 = document.querySelector(".p3-textbox");

gsap.from(".p3-img", {
  y: 200,
  opacity: 0,
  duration: 1,
  ease: "easeInOut",
  scrollTrigger: {
    trigger: ".p3",
    start: "20% center",
  },
});

gsap.from(tb3.children, {
  x: -100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".p3",
    start: "30% center",
  },
});

const TeamContainer = document.querySelector(".team");

const teamline = gsap.timeline({
  defaults: { opacity: 0 },
  scrollTrigger: {
    trigger: TeamContainer,
    start: "25% center",
  },
});

teamline
  .from(".team__header", { y: 100, duration: 0.8 })
  .from(".team__paragraph", { x: -200, duration: 1.2 });

const ExploreContainer = document.querySelector(".explore");

const exploreline = gsap.timeline({
  defaults: { opacity: 0 },
  scrollTrigger: {
    trigger: ExploreContainer,
    start: "25% center",
  },
});

exploreline
  .from(".explore__greybox", { x: -200, duration: 0.8 })
  .from(".explore__img", { x: -200, duration: 0.8 })
  .from(".explore__header", { y: -100, duration: 0.8 })
  .from(".explore__button", { duration: 0.2 });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
