gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Cache les boutons au départ
gsap.set(".cta-group .btn", { 
    opacity: 0, 
    y: 20 
});

// Attend la fin du typewriter
document.addEventListener("typewriterDone", () => {
    gsap.to(".cta-group .btn", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2 // les boutons apparaissent l'un après l'autre
    });
});


// -------------------- SCROLL ANIMATIONS HOME --------------------

// Section À propos
gsap.from("#about h1", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from("#about p", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

// Section Services — titre puis cards en stagger
gsap.from("#preview_services h2", {
    scrollTrigger: {
        trigger: "#preview_services",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from("#preview_services .card", {
    scrollTrigger: {
        trigger: "#preview_services .card_container",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
});

gsap.from(".to_the_portfolio", {
    scrollTrigger: {
        trigger: ".to_the_portfolio",
        start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
});

// Section Compétences — titre puis cards en stagger
gsap.from("#preview_abilities h2", {
    scrollTrigger: {
        trigger: "#preview_abilities",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from("#preview_abilities .card", {
    scrollTrigger: {
        trigger: "#preview_abilities .card_container",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
});

// Bloc Clotho
gsap.from(".clotho p", {
    scrollTrigger: {
        trigger: ".clotho",
        start: "top 80%",
    },
    opacity: 0,
    x: -40,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from(".clotho img", {
    scrollTrigger: {
        trigger: ".clotho",
        start: "top 70%",
    },
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

gsap.from(".clotho .btn", {
    scrollTrigger: {
        trigger: ".clotho",
        start: "top 60%",
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out"
});

// Footer
gsap.from("footer", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
});