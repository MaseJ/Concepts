gsap.timeline().from("#title", {
    y: 400,
    opacity: .5,
    ease: "power4.out",
    skewY: 40,
    duration: 2
}).from("#nav", {
    xPercent: -100,
    ease: "power4.out",
    duration: 2,
    delay: -1
}).from(".nav-item", {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: .1
}).from(".imgs", {
    opacity: 0,
    stagger: 1,
    y: 200,
    duration: 1,
    delay: -1
});








