gsap.registerPlugin(ScrollTrigger);
gsap.timeline().to("#first", {
    transformOrigin: "right center",
    scrollTrigger: {
        trigger: "#main",
        start: "top bottom",
        end: "top 70%",
        scrub: 1
    },
    scale: 5,
    opacity: 0,
    xPercent: -100
}).to("#second", {
    transformOrigin: "left center",
    scrollTrigger: {
        trigger: "#main",
        start: "top bottom",
        end: "top 70%",
        scrub: 1
    },
    scale: 5,
    opacity: 0,
    xPercent: 100
}).from("#main", {
    scrollTrigger: {
        trigger: "#main",
        start: "top bottom",
        end: "top bottom",
        scrub: 1
    },
    scale: 0
});