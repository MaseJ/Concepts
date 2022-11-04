// Scroll trigger for end of content
// Move conent up and fade in footer
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#content",
        start: "bottom-=10% bottom-=150px",
        scrub: true
    }
});

tl.to("#content", {
    yPercent: -15,
    duration: .5
}).to("#footer", {
    duration: 0
});

let tlLines = gsap.timeline({
    scrollTrigger: {
        start: "top top",
        scrub: 1,
        end: "bottom bottom-=20vh"
    }
});

tlLines.to("#lineV", {
    height: "100vh"
}).to("#lineH", {
    width: "100vw"
});