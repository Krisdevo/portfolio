// -------------------- GSAP PLUGINS --------------------
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// -------------------- DETECTION MOBILE --------------------
const isMobile = window.innerWidth < 768;

// -------------------- SECTION SERVICES --------------------

gsap.from("#services h1", {
    scrollTrigger: {
        trigger: "#services h1",
        start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from("#services > p", {
    scrollTrigger: {
        trigger: "#services > p",
        start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

gsap.from("#services .card", {
    scrollTrigger: {
        trigger: "#services .card_container",
        start: "top 80%",
    },
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power2.out",
    stagger: isMobile ? 0 : 0.3
});

gsap.from("#services .btn", {
    scrollTrigger: {
        trigger: "#services .btn",
        start: "top 90%",
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out"
});

// -------------------- SECTION RECRUTEUR --------------------

gsap.from("#recruit h2", {
    scrollTrigger: {
        trigger: "#recruit h2",
        start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from("#recruit > p:first-of-type", {
    scrollTrigger: {
        trigger: "#recruit > p:first-of-type",
        start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
});

// -------------------- CLOTHO --------------------

gsap.from(".clotho_title", {
    scrollTrigger: {
        trigger: ".clotho_title",
        start: "top 85%",
    },
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "back.out(1.7)"
});

gsap.from("#recruit img", {
    scrollTrigger: {
        trigger: "#recruit img",
        start: "top 80%",
    },
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: "power2.out"
});

gsap.from("#recruit p:not(.clotho_title):not(:first-of-type)", {
    scrollTrigger: {
        trigger: "#recruit img",
        start: "bottom 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
});

gsap.set(".btn_clotho, .btn_cv, .btn_contact", { opacity: 0, y: 20 });

gsap.to(".btn_clotho", {
    scrollTrigger: {
        trigger: ".btn_clotho",
        start: "top 90%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
});

gsap.to(".btn_cv", {
    scrollTrigger: {
        trigger: ".links_box",
        start: "top 90%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.1,
    ease: "power2.out"
});

gsap.to(".btn_contact", {
    scrollTrigger: {
        trigger: ".links_box",
        start: "top 90%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

// -------------------- CE QUE JE RECHERCHE --------------------

gsap.from("#recruit h3", {
    scrollTrigger: {
        trigger: "#recruit h3",
        start: "top 85%",
    },
    opacity: 0,
    x: -40,
    duration: 0.8,
    ease: "power2.out"
});

gsap.set(".search_text", { opacity: 0, y: 30 });

gsap.to(".search_text", {
    scrollTrigger: {
        trigger: ".search_text",
        start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});
