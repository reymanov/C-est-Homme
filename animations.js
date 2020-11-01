
let t1 = gsap.timeline({defaults:{opacity:0}});

t1.from('.hero__greybox', { y: 500, duration: .8})
.from('.hero__img', {x:-1200,duration: 1.2})
.from('.title-1', {duration: 1, y:-100}, "-=.5")
.from('.title-2', {duration: 1, y:-100},"-=.5")
.from('.title-3', {duration: 1},"-=.5")

gsap.from(".signature__title", {
    scrollTrigger: ".signature__title", // start the animation when ".box" enters the viewport (once)
    y: 100,
    opacity: 0,
    duration:.8
  });

  gsap.from(".signature__paragraph", {
    scrollTrigger: ".signature__paragraph", // start the animation when ".box" enters the viewport (once)
    y: 100,
    opacity: 0,
    duration:.8,
    delay:.4
  });

  gsap.from(".signature__sign", {
    scrollTrigger: ".signature__sign", // start the animation when ".box" enters the viewport (once)
    y: 100,
    opacity: 0,
    duration:.8,
    delay:.8
  });
{
  let p1 = gsap.timeline({
    defaults:{opacity:0, duration:.8},
    scrollTrigger:{
  trigger: '.project1',
  start:'center center'}
});

p1.from('.project__img-1', {y:200})
.from('.project__title-1',{x:-100} , "-=.5")
.from('.project__description-1',{x:-100} , "-=.5")
.from('.project__button-1',{}, "-=.5");
}

{
let p2 = gsap.timeline({
    defaults:{opacity:0, duration:.8},
    scrollTrigger:{
  trigger: '.project2',
  start:'center center'}
});

p2.from('.project__img-2', {y:-200})
.from('.project__title-2',{x:100} , "-=.5")
.from('.project__description-2',{x:100} , "-=.5")
.from('.project__button-2',{}, "-=.5");
}


{
let p3 = gsap.timeline({
    defaults:{opacity:0, duration:.8},
    scrollTrigger:'.project3'});

p3.from('.project__img-3', {y:200})
.from('.project__title-3',{x:-100} , "-=.5")
.from('.project__description-3',{x:-100} , "-=.5")
.from('.project__button-3',{}, "-=.5");
}

  