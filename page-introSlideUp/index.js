gsap.timeline().from("#box", {
    duration: 1.5,
    scaleY: 0,
    transformOrigin: "bottom center",
    top: "60%",
    ease: "power4.inOut",
    delay: .25
}).to("#box", {
    duration: 1.5,
    scaleY: 0,
    transformOrigin: "top center",
    top: "20%",
    ease: "power4.inOut"
}).from("#main", {
    yPercent: 100,
    duration: 2,
    ease: "power4.inOut"
}, "<").to("#cover", {
    duration: 1,
    scaleY: 0,
    transformOrigin: "top center",
    ease: "power4.inOut"
}).from("#name", {
    duration: 2,
    opacity: 0,
    left: "-10%",
    ease: "power4.inOut"
}).from(".fade", {
    opacity: 0,
    duration: 1.5,
    ease: "power4.inOut"
}, "<");