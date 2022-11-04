const line = document.querySelector("#line");
const line2 = document.querySelector("#line2");
const btn = document.querySelector("#btn");

let menuOpen = false;

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menuOpen = !menuOpen;

    if(menuOpen){

        gsap.to("#line", {
            opacity: 1, 
            ease: "power4.out", 
            duration: .5,
            y: 3
        });
        gsap.to("#line2", {
            opacity: 1, 
            ease: "power4.out", 
            duration: .5,
            y: -3,
        });
        gsap.to("#line2", {
            ease: "power4.out",
            duration: .5,
            rotation: 90,
            delay: .5
        });
        gsap.to("#content", {
            ease: "power4.out",
            duration: .5
        })
        gsap.to("#content", {
            ease: "power4.out",
            duration: 1.5,
            opacity: 1
        });
        gsap.from("#pages", {
            ease: "power4.out",
            duration: 1,
            yPercent: -80
        })

    } else {

        gsap.to("#line", {
            ease: "power4.out",
            duration: .5,
        });
        gsap.to("#line2", {
            ease: "power4.out",
            duration: .5,
            rotation: 180
        });
        gsap.to("#line", {
            y: -.5,
            duration: .5,
            opacity: .5,
            ease: "power4.out",
            delay: .5
        });
        gsap.to("#line2", {
            y: .5,
            duration: .5,
            opacity: .5,
            ease: "power4.out",
            delay: .5
        });
        gsap.to("#content", {
            ease: "power4.out",
            duration: 1,
            opacity: 0
        });
        
    }

}

