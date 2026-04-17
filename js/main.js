// -------------------- PARTICULES --------------------

tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 100, // nombre de particules
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
  const paragraphs = aboutText.querySelectorAll("p");
  
  // Sauvegarde les textes et vide la zone (y compris le curseur existant)
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
        setTimeout(typeWriter, 40); // vitesse par caractère
      } else {
        pIndex++;
        charIndex = 0;
        setTimeout(typeWriter, 400); // pause avant le paragraphe suivant
      }
    } else {
      // Curseur clignotant à la fin
      const lastP = aboutText.lastElementChild;
      const cursor = document.createElement("span");
      cursor.classList.add("cursor");
      lastP.appendChild(cursor);
    }
  }

  typeWriter();
}


document.addEventListener("DOMContentLoaded", startTypewriter);