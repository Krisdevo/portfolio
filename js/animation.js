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