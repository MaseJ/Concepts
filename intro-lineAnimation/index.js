gsap.timeline().from(".line", {
    duration: 1.25,
    scaleY: 3,
    opacity: .5,
    delay: 2,
    stagger: {
        amount: .5
    }
}, "-=1").from("#header", {
    duration: 1,
    xPercent: -100
}).from("#header p", {
    duration: .5,
    opacity: 0
}).from("#loc", {
    duration: 1,
    opacity: 0
}, "<").from("#big", {
    duration: 1,
    opacity: 0,
    yPercent: 100,
    stagger: .5
}, "<").from("#circle", {
    duration: 3,
    opacity: 0,
    xPercent: 200
}).to("#circle", {
    duration: 8,
    xPercent: 300,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
});