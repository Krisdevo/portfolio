// -------------------- GSAP PLUGINS --------------------
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// -------------------- SECTION INTRO --------------------

gsap.set("#intro h1", { opacity: 0, y: 40 });
gsap.to("#intro h1", {
    scrollTrigger: {
        trigger: "#intro h1",
        start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
});

gsap.set("#intro p", { opacity: 0, y: 30 });
gsap.to("#intro p", {
    scrollTrigger: {
        trigger: "#intro p",
        start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

// -------------------- FORMULAIRE --------------------

gsap.set("#contact_form h2", { opacity: 0, y: 30 });
gsap.to("#contact_form h2", {
    scrollTrigger: {
        trigger: "#contact_form",
        start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
});

gsap.set(".form_group", { opacity: 0, y: 30 });
gsap.to(".form_group", {
    scrollTrigger: {
        trigger: "#contact_form",
        start: "top 80%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15
});

gsap.set("#submit_btn", { opacity: 0, y: 20 });
gsap.to("#submit_btn", {
    scrollTrigger: {
        trigger: "#submit_btn",
        start: "top 90%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

// -------------------- CONTACT INFO --------------------

gsap.set(".title_contact_info", { opacity: 0, y: 20 });
gsap.to(".title_contact_info", {
    scrollTrigger: {
        trigger: ".contact_info",
        start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
});

gsap.set(".contact_info a", { opacity: 0, x: -30 });
gsap.to(".contact_info a", {
    scrollTrigger: {
        trigger: ".contact_info",
        start: "top 80%",
    },
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
});