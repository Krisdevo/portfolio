// -------------------- PARTICULES --------------------

tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 150, // nombre de particules
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
            speed: 0.6, // lent et doux
            direction: "none",
            random: true,
        },
        links: {
            enable: false // pas de lignes entre les particules
        }
    },
    background: {
        color: "transparent"
    }
});


// -------------------- MAGIC TEXT --------------------

function startTypewriter() {
    const aboutText = document.querySelector(".terminal-text");

    // Vérification : on ne lance pas si l'élément n'existe pas
    if (!aboutText) return;

    const paragraphs = aboutText.querySelectorAll("p");

    const texts = Array.from(paragraphs).map(p => p.textContent.trim());
    aboutText.innerHTML = "";

    let pIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (pIndex < texts.length) {
            if (!aboutText.children[pIndex]) {
                aboutText.appendChild(document.createElement("p"));
            }
            let currentP = aboutText.children[pIndex];
            let fullText = texts[pIndex];

            if (charIndex < fullText.length) {
                currentP.textContent += fullText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 20);
            } else {
                pIndex++;
                charIndex = 0;
                setTimeout(typeWriter, 400);
            }
        } else {
            // Curseur clignotant à la fin
            const lastP = aboutText.lastElementChild;
            const cursor = document.createElement("span");
            cursor.classList.add("cursor");
            lastP.appendChild(cursor);

            document.dispatchEvent(new CustomEvent("typewriterDone"));
        }
    }

    typeWriter();
}


document.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(startTypewriter);
});