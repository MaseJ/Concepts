let image = document.querySelector("#imgs");
let yes = document.querySelector("#yes");
let no = document.querySelector("#no");

yes.addEventListener("click", pickYes);
no.addEventListener("click", pickNo);
image.addEventListener("mouseenter", openUp);
image.addEventListener("mouseleave", closeDown);


// Timelines

var tlHover = gsap.timeline().to("#big1", {
    duration: .5,
    y: -50,
    x: 60,
    rotation: 10,
    ease: "power4.out"
}).to("#big2", {
    duration: .5,
    y: -50,
    x: -60,
    rotation: -10,
    ease: "power4.out"
}, "<").to("#small1", {
    duration: .5,
    ease: "power4.out",
    xPercent: 350,
    y: -100,
    rotation: 25,
}, "<").to("#small2", {
    duration: .5,
    ease: "power4.out",
    xPercent: -350,
    y: -100,
    rotation: -25,
}, "<");


// Some reason the animation starts being plage on page load so
// doing reverse to change that
tlHover.reverse();

// Hover functions
function openUp() {

    tlHover.play();

}

function closeDown() {
    
    tlHover.reverse();

}

// Buttons functions
function pickYes() {
    
    gsap.timeline().to("#imgs", {
        duration: .5,
        ease: "power4.out",
        y: -100
    }).to("#imgs", {
        duration: 1,
        ease: "power4.out",
        transformOrigin: "top right",
        rotation: -180,
        opacity: 0
    }).to("#imgs", {
        duration: 1,
        ease: "power4.out",
        transformOrigin: "top right",
        rotation: 0,
        opacity: 1
    }).to("#imgs", {
        duration: 1,
        ease: "power4.out",
        y: 4
    });

}

function pickNo() {

    gsap.timeline().to("#imgs", {
        duration: .5,
        ease: "power4.out",
        y: -100
    }).to("#imgs", {
        duration: 1,
        ease: "power4.out",
        transformOrigin: "top left",
        rotation: 180,
        opacity: 0
    }).to("#imgs", {
        duration: 1,
        ease: "power4.out",
        transformOrigin: "top left",
        rotation: 0,
        opacity: 1
    }).to("#imgs", {
        duration: 1,
        ease: "power4.out",
        y: 4
    });

}