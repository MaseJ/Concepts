gsap.registerPlugin(ScrollTrigger);

// Timeline for intro

gsap.from("#title", {
    opacity: 0,
    y: -100,
    duration: 1.5,
    delay: .5,
    ease: "power4.out"
})

gsap.from("#design--container", {
    scrollTrigger: {
        trigger: "#design--container",
        start: "top bottom",
        end: "top 80%",
        scrub: 1
    },
    xPercent: -100
});

gsap.from("#circle--container, #circle--main", {
    scrollTrigger: {
        trigger: "#text1",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1
    },

    scale: 0,
    duration: 1,
    stagger: .5
});

gsap.to("#circle--container", {
    scrollTrigger: {
        trigger: "#text2",
        start: "top 80%",
        endTrigger: "#text3",
        end: "top bottom",
        scrub: 1
    },
    borderRadius: "+=50% +=50%",
    height: 0,
    width: 0,
    opacity: 0
});

gsap.to("#circle--main", {
    scrollTrigger: {
        trigger: "#text2",
        start: "top 80%",
        endTrigger: "#text3",
        end: "top bottom",
        scrub: 1
    },
    height: "30vw",
    width: "30vw"
});

gsap.from("#circle--inner", {
    scrollTrigger: {
        trigger: "#text3",
        start: "top 80%",
        endTrigger: "#text4",
        end: "top bottom",
        scrub: 1
    },
    scale: 0,
});

gsap.from(".dot", {
    scrollTrigger: {
        trigger: "#text4",
        start: "top 80%",
        endTrigger: "#text5",
        end: "top bottom",
        scrub: 1
    },
    scale: 0,
    stagger: .00005
});

gsap.to("#circle--main", {
    scrollTrigger: {
        trigger: "#text4",
        start: "top 80%",
        endTrigger: "#text5",
        end: "top bottom",
        scrub: 1
    },
    rotation: 360
})

gsap.to("#text--container", {
    scrollTrigger: {
        trigger: "#text5",
        start: "top bottom"
    },
    backgroundColor: "black"
});










