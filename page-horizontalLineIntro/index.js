gsap.timeline().from(".line", {
    delay: .5,
    duration: 1,
    ease: "power4.out",
    stagger: .25,
    transformOrigin: "left center",
    scaleX: 0
}).to(".line3", {
    duration: 2,
    ease: "power4.out",
    transformOrigin: "center center",
    scaleY: 1000
}).to("#line--container", {
    display: "none"
}, "-=2").from("#header > h1", {
    opacity: 0,
    x: 100,
    duration: .5
}, "-=1.5").from("#header--text", {
    opacity: 0,
    x: -100,
    duration: .5
}, "<").from(".nav--item", {
    stagger: .5,
    duration: .05,
    opacity: 0,
    y: 100
}, "<");


let open = gsap.timeline().to("#nav--text", {
    duration: 1,
    ease: "back.out(1.1)",
    scaleY: 1
});

open.pause();

const items = document.querySelectorAll(".nav--item");
const navMenu = document.querySelector("#nav--text");

navMenu.addEventListener("click", () => {
    open.reverse();
});

items.forEach(item => {

    item.addEventListener("click", () => {
        
       
        open.restart();
       
    });
});