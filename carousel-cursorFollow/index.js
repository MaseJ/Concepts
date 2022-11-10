let next = document.querySelector("#next");
let prev = document.querySelector("#prev");


next.addEventListener("mouseenter", goNext);
prev.addEventListener("mouseenter", goPrev);
next.addEventListener("click", clickNext);
prev.addEventListener("click", clickPrev);


function goNext() {

    gsap.timeline().to("#top", {
        duration: .5,
        rotation: -45,
        opacity: .5,
        y: 15
    }).to("#bottom", {
        duration: .5,
        rotation: 45,
        opacity: .5,
        y: -15
    }, "<");
    
}

function goPrev() {

    gsap.timeline().to("#top", {
        duration: .5,
        rotation: 45,
        opacity: .5,
        y: 15
    }).to("#bottom", {
        duration: .5,
        rotation: -45,
        opacity: .5,
        y: -15
    }, "<");

}

function clickNext() {

    gsap.timeline().from("#text", {
        duration: .5,
        opacity: .5,
        xPercent: 100
    });
    
}

function clickPrev() {

    gsap.timeline().from("#text", {
        duration: .5,
        opacity: .5,
        xPercent: -100
    });
    
}

const cursor = document.querySelector('.cursor');

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

let speed = .5;

function animate() {
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;

    cursorX = cursorX + (distX * speed);
    cursorY = cursorY + (distY * speed);

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animate);
}


animate();

document.addEventListener('mousemove', (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
});

