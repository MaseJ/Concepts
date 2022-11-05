const menu = document.querySelector("#menu");
const closed = document.querySelector("#close");
menu.addEventListener("click", toggleMenu);
closed.addEventListener("click", closeMenu);

function toggleMenu() {

    gsap.to("#menu", {
        duration: 2,
        ease: "power4.out",
        opacity: 0,
        visibility: "hidden"
    });

    gsap.to("#close", {
        duration: 2,
        ease: "power4.out",
        opacity: 1,
        visibility: "visible" 
    });

    gsap.from("#close", {
        duration: 1,
        ease: "power4.out",
        x:100
    });

    gsap.from("#content", {
        duration: 1,
        ease: "power4.out",
        x:500
    });

    gsap.to("#content", {
        duration: 1,
        ease: "power4.out",
        visibility: "visible",
        opacity: 1
    });

}

function closeMenu() {

    gsap.to("#close", {
        duration: 2,
        ease: "power4.out",
        opacity: 0,
        visibility: "hidden"
    });

    gsap.to("#menu", {
        duration: 2,
        ease: "power4.out",
        opacity: 1,
        visibility: "visible"
    });

    gsap.from("#menu", {
        duration: 1,
        ease: "power4.out",
        x:100
    });

    gsap.to("#content", {
        duration: 1,
        ease: "power4.out",
        opacity: 0
    });

};

