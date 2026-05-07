// -------------------- PARTICULES --------------------

const isMobile = window.innerWidth <= 768;

tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: isMobile ? 30 : 150, // 30 sur mobile, 150 sur desktop
        },
        color: {
            value: ["#4fd6a1", "#19A3E3"]
        },
        size: {
            value: { min: 1, max: 3 }
        },
        opacity: {
            value: { min: 0.1, max: 0.4 }
        },
        move: {
            enable: true,
            speed: isMobile ? 0.3 : 0.6, // plus lent sur mobile
            direction: "none",
            random: true,
        },
        links: {
            enable: false
        }
    },
    background: {
        color: "transparent"
    }
});