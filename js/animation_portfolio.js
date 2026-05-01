// -------------------- GSAP PLUGINS --------------------
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// -------------------- DETECTION MOBILE --------------------
const isMobile = window.innerWidth < 768;

// -------------------- INTRO PORTFOLIO --------------------

gsap.set("#portfolio h1", { opacity: 0, y: 40 });
gsap.to("#portfolio h1", {
    scrollTrigger: {
        trigger: "#portfolio h1",
        start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
});

gsap.set("#portfolio > p", { opacity: 0, y: 30 });
gsap.to("#portfolio > p", {
    scrollTrigger: {
        trigger: "#portfolio > p",
        start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

// -------------------- CARTES INDIVIDUELLES --------------------

document.querySelectorAll('.card').forEach((card, index) => {

    // Alternance gauche/droite sur desktop, bas sur mobile
    const xFrom = isMobile ? 0 : (index % 2 === 0 ? -60 : 60);
    const yFrom = isMobile ? 50 : 0;

    gsap.set(card, { opacity: 0, x: xFrom, y: yFrom });

    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: isMobile ? "top 90%" : "top 80%",
        },
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.9,
        ease: "power2.out"
    });
});

// -------------------- SECTION CTA CONTACT --------------------

gsap.set("#cta_contact h2", { opacity: 0, y: 40 });
gsap.to("#cta_contact h2", {
    scrollTrigger: {
        trigger: "#cta_contact",
        start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
});

gsap.set("#cta_contact p", { opacity: 0, y: 30 });
gsap.to("#cta_contact p", {
    scrollTrigger: {
        trigger: "#cta_contact",
        start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

gsap.set("#cta_contact .btn", { opacity: 0, y: 20 });
gsap.to("#cta_contact .btn", {
    scrollTrigger: {
        trigger: "#cta_contact",
        start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out"
});