import { Gradient } from './Gradient.js'

// Create your instance
const gradient = new Gradient()

// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas');


var tl = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 2.5, delay: 2.5});

tl.to(".hero--text", {
    yPercent: -100,
    duration: .5
}).to(".hero--text", {
    yPercent: -200,
    duration: .5,
    delay: 2.5
});

var tlDesign = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 2.5, delay: 2.5});

tlDesign.to(".design--line", {
    rotation: "+=120",
    duration: .5,
    repeatRefresh: true
}).to(".design--line", {
    rotation: "+=120",
    duration: .5,
    delay: 2.5,
    repeatRefresh: true
});

let textContainer = document.querySelector('#hero--text--container');

let lineAnimation = gsap.timeline({
    repeatRefresh: true,
    onReverseComplete: function() {
        tl.resume();
        tlDesign.resume();
    },
    onStart: function() {
        tl.pause();
        tlDesign.pause();
    },
    paused: true
});

lineAnimation.to("#design", {
    opacity: .5,
    duration: .25,
    repeatRefresh: true
}).to(".design--line", {
    opacity: .5,
    duration: .25,
    repeatRefresh: true
},"<").to(".hero--text", {
    opacity: 1,
    duration: .25,
    repeatRefresh: true
}, "<");




textContainer.addEventListener("mouseenter", () => {
    lineAnimation.play();
});



textContainer.addEventListener("mouseleave", () => {
    lineAnimation.reverse();
    
});

let btn = document.querySelector("#button");

btn.addEventListener('click', toggleMenu);

gsap.set(".menu--text", {
    opacity: 0,
    x: 100
});

let btnTransfrom = gsap.timeline({ paused: true }).to(".top", {
    duration: .25,
    ease: "power2.out",
    scaleX: 1
}).to(".bottom", {
    duration: .25,
    ease: "power2.out",
    scaleX: 1
}, "<").to(".top", {
    duration: .25,
    ease: "power2.out",
    yPercent: 100,
    y: 7
}).to(".bottom", {
    duration: .25,
    ease: "power2.out",
    y: -7
},"<").to(".bottom", {
    duration: .25,
    ease: "power2.out",
    transformOrigin: "center center",
    rotation: 90
}).to("#button", {
    transformOrigin: "center center",
    duration: .25,
    ease: "power2.out",
    rotation: 45
}, "<")

function toggleMenu() {
    if(btn.ariaPressed === "false") {
        btn.ariaPressed = "true"
        gsap.to(".menu--text", {
            opacity: 1,
            x: -100,
            stagger: .05,
            duration: .75,
            ease: "power2.out"
        });
        gsap.to(".hero", {
            xPercent: -25,
            duration: 1,
            ease: "power2.out"
        });
        btnHoverAnimation.pause();
        btnTransfrom.restart();
        
    } else {
        btn.ariaPressed = "false"
        gsap.to(".menu--text", {
            opacity: 0,
            x: 100,
            stagger: .05,
            duration: .75,
            ease: "power2.out"
        });

        gsap.to(".hero", {
            xPercent: 0,
            duration: 1,
            ease: "power2.out"
        });

        btnHoverAnimation.restart();
        btnTransfrom.reverse();
    }
    
};


let btnHoverAnimation = gsap.timeline({ yoyo: true, repeat: -1, repeatDelay: .25, delay: 1 }).to(".top", {
    scaleX: .75,
    duration: 2
}).to(".bottom", {
    scaleX: .75,
    transformOrigin: "right center",
    duration: 2
}, "<");

function btnHover() {
    btnHoverAnimation.play();
}

function btnHoverLeave() {
    btnHoverAnimation.reverse();
}